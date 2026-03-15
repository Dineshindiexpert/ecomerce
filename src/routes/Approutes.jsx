// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/login'
import Signup from '../auth/signup'
import Home from '../pages/defaultpages/Home'
import Dashboard from '../pages/defaultpages/Dashoboard'
// import Pagination from '../components/Pagination'
import Cart from '../pages/defaultpages/Cart'

const AppRoutes = () => {
  return (
    <Routes>
       
      <Route path="/login" element={<Login />} />
      
       
      <Route path="/signup" element={<Signup />} />
      <Route path ="/Home" element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      {/* <Route path='/page' element={<Pagination/>}/> */}
      <Route path="/cart" element={<Cart />} />
      
        
      
      {/* Optional: Redirect the root path to login */}
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes;
