import { Navigate, Outlet } from "react-router-dom";


// export function PrivateRoute({ isAuth }) {
//   return (
//     isAuth ? <Outlet /> : <Navigate to="/login" />
//   )
// }

export function PrivateRoute({ token }) {
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}
