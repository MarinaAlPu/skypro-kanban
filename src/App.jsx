import './App.css';
import { AppRoutes } from './components/AppRouts.jsx';
import { useState, useEffect } from 'react';


function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // console.log(isAuth, " в App");


  // const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Проверяем наличие токена в localStorage
    const storedToken = localStorage.getItem("userInfo");
    if (storedToken) {
      const userInfo = JSON.parse(storedToken);
      setToken(userInfo.token); // Устанавливаем токен из localStorage
      // setIsAuth(true); // Устанавливаем состояние авторизации
    }
  }, []);



  // return <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken} />
  return <AppRoutes token={token} setToken={setToken} />
}

export default App


// function App() {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("userInfo");
//     if (storedToken) {
//       const userInfo = JSON.parse(storedToken);
//       setToken(userInfo.token);
//     }
//   }, []);

//   return <AppRoutes token={token} setToken={setToken} />
// }

// export default App