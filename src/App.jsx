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
import ContractForm from './components/Form/Form'
import PastSales from './pages/PastSales/PastSales'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [contracts, setContracts] = useState([])
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

  const addContract = async (contractData) => {
    const contract = await contractService.createContract(contractData)
    setContracts([...contracts, contract])
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
          element={ <Profiles />} />
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={<Dash />} />
        />
        <Route
          path="/inventory"
          element={<Inventory /> }/>
        />
        <Route
          path="/filters"
          element={ <EditWater />} />
        <Route
          path="/stoves"
          element={<EditStoves /> } />
        <Route
          path="/contracts"
          element= {<ContractForm addContract={addContract} /> }
        />
        <Route
          path='/pastsales'
          element={<PastSales contracts={contracts} /> } />
      </Routes>
    </div>
  )
}

export default App
