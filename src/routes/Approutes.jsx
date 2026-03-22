import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../auth/login";
import Signup from "../auth/signup";

import Home from "../pages/Home";
import Dashboard from "../defaultpages/Dashboard";
import Cart from "../defaultpages/Cart";
import NotFound from "../pages/NotFound";

import Electronics from "../components/Electronics";
import Sports from "../components/Sports";
import Clothes from "../components/Clothes";
import Toys from "../components/Toys";
import Gifts from "../components/Gifts";
import Books from "../components/Books";
import Homeandkitchen from "../components/Homeandkitchen";
import Beautyproducts from "../components/Beautyproducts";

import Productdetails from "../components/Productdetails";
import Protectroutes from "../auth/Protectroutes";
import Apicalling from "../api/Apicalling";
import Wishlist from "../defaultpages/Wishlist";
import Loading from "../components/Loading";
// import Apicalling from "../pages/Apicalling";
 
const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Routes>

      {/* Public Routes */}
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/signup"
        element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
      />

      {/* Protected Routes */}
      <Route element={<Protectroutes />}>

        {/* Layout Route */}
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />

          <Route path="clothes" element={<Clothes />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="toys" element={<Toys />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="sports" element={<Sports />} />
          <Route path="home-kitchen" element={<Homeandkitchen />} />
          <Route path="beauty" element={<Beautyproducts />} />
          <Route path="books" element={<Books />} />

          <Route path="product/:id" element={<Productdetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path='/API' element={<Apicalling/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
           <Route path='/loading' element={<Loading/>}/>


        </Route>

      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;