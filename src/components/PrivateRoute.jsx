import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";


// export function PrivateRoute({ token }) {
//   return (
//     token ? <Outlet /> : <Navigate to="/login" />
//   )
// }

export function PrivateRoute() {
  const { user } = useContext(AuthContext);
  const token = user.token;
  // console.log(token);
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}
