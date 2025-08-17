import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }: any) => {
  let { token } = useSelector((state: any) => state.AuthReducer);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
