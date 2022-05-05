import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Dash from './pages/Dashboard/Dash'
import Inventory from './pages/Inventory/Inventory'
import * as authService from './services/authService'
import * as contractService from './services/contractService'
import ContractForm from './components/Form/Form'

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
          element={user ? <Inventory /> : <Navigate to="/" />}
        />
        <Route
          path="/contracts"
          element= {<ContractForm addContract={addContract} /> }
        />
      </Routes>
    </div>
  )
}

export default App
