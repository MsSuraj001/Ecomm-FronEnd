import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/Auth/SignUp'
import LogIn from './Components/Auth/LogIn'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/signUp' element={<SignUp/>}/>
        <Route path='/auth/logIn' element={<LogIn/>}/>
      </Routes>
  )
}

export default App
