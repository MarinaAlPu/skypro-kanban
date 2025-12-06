import { Navigate, Outlet } from "react-router-dom";


export function PrivateRoute({ token }) {
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}
