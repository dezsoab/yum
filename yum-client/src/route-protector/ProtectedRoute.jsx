import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children, redirectPath = "/landing" }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
