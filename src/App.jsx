import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/Auth/SignUp'
import LogIn from './Components/Auth/LogIn'
import AddProduct from './Components/AdminPage/addProduct'
import NotFound from './Components/Pages/NotFound'
import UserAccount from './Components/Pages/UserAccount'
import CartDetails from './Components/Pages/cartDetails'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/signUp' element={<SignUp/>}/>
        <Route path='/auth/logIn' element={<LogIn/>}/>
        <Route path='/user/account' element={<UserAccount/>}/>
        <Route path='/user/cart' element={<CartDetails/>}/>

        <Route path='/admin/addProduct' element={<AddProduct/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
  )
}

export default App
