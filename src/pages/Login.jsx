// import { AuthForm } from "../components/authForm/AuthForm";
import { Login } from "../components/Login";


export const LoginPage = ({ setIsAuth }) => {
  return (
    <Login setIsAuth={setIsAuth} />
  )
}



// export const LoginPage = () => {
//   return (
//     <AuthForm isSignUp={false}/>
//   )
// }