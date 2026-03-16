import { Navigate, Outlet } from "react-router-dom";

const Protectroutes = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default Protectroutes;