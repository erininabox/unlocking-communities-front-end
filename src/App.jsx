import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Dash from './pages/Dashboard/Dash'
import Inventory from './pages/Inventory/Inventory'
import EditWater from './pages/EditWater/EditWater'
import EditStoves from './pages/EditStoves/EditStoves'
import * as authService from './services/authService'
import * as contractService from './services/contractService'
import * as inventoryService from './services/inventoryService'
import ContractForm from './components/Form/Form'
import PastSales from './pages/PastSales/PastSales'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [contracts, setContracts] = useState([])
  const [inventory, setInventory] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await contractService.getAll()
      setContracts(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await inventoryService.getAll()
      setInventory(data)
    }
    fetchData()
  }, [])

  const addContract = async (contractData) => {
    const contract = await contractService.createContract(contractData)
    setContracts([...contracts, contract])
  }

  const addStoveInventory = async (inventoryData) => {
    const item = await inventoryService.addInventory(inventoryData)
    setInventory([...inventory, item])
  }



  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        {/* <Route path="/" element={< user={user} />} /> */}
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/"
          element={!user ? <Login handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dash /> : <Navigate to="/" />}
        />
        <Route
          path="/inventory"
          element={user ? <Inventory inventory={inventory} /> : <Navigate to="/" />} />
        <Route
          path="/filters"
          element={user ? <EditWater /> : <Navigate to="/login" />} />
        <Route
          path="/stoves"
          element={user ? <EditStoves addStoveInventory={addStoveInventory}/> : <Navigate to="/login" />} />
        <Route
          path="/contracts"
          element= {<ContractForm addContract={addContract} /> }
        />
        <Route
          path='/pastsales'
          element={user ? <PastSales contracts={contracts} /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  )
}

export default App