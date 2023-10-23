import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;


  if(loading){
        return <span className="loading loading-spinner text-error"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={path} to="/login"></Navigate>;
};

export default PrivateRoute;
