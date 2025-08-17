import { Route, Routes } from "react-router";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Homepage from "../Pages/Homepage/Homepage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
