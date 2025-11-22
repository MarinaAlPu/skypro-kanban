import { AuthForm } from "../components/authForm/AuthForm";


// export const Login = ({setIsAuth}) => {
//   return (
//     <AuthForm setIsAuth={setIsAuth} isSignUp={false}/>
//   )
// }

// export const Login = ({ setIsAuth, setToken }) => {
//   return <AuthForm setIsAuth={setIsAuth} setToken={setToken} isSignUp={false} />;
// };

export const Login = ({ setToken }) => {
  return <AuthForm setToken={setToken} isSignUp={false} />;
};