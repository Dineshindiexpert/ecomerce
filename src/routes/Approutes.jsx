import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

import Home from "../defaultpages/Home";
import Dashboard from "../defaultpages/Dashboard";
import Cart from "../defaultpages/Cart";
import NotFound from "../defaultpages/NotFound";

import Electronics from "../pages/Electronics";
import Sports from "../pages/Sports";
import Clothes from "../pages/Clothes";
import Toys from "../pages/Toys";
import Gifts from "../pages/Gifts";
import Books from "../pages/Books";
import Homeandkitchen from "../pages/Homeandkitchen";
import Beautyproducts from "../pages/Beautyproducts";

import Productdetails from "../components/Productdetails";
import Protectroutes from "../auth/Protectroutes";

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

          <Route path="product/:slug" element={<Productdetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>

      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;