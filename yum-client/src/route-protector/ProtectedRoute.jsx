import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children, redirectPath = "/landing" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
