import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Components/Home'
import SignUn from './Components/Auth/SignUp'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='auth/signIn' element={<SignUn/>}/>
      </Routes>
  )
}

export default App
