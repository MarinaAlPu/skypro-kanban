import { Login } from "../components/Login";


// export const LoginPage = ({ setIsAuth }) => {
//   return (
//     <Login setIsAuth={setIsAuth} />
//   )
// }

// export const LoginPage = ({ setIsAuth, setToken }) => {
//   return <Login setIsAuth={setIsAuth} setToken={setToken} />;
// };

export const LoginPage = ({ setToken }) => {
  return <Login  setToken={setToken} />;
};