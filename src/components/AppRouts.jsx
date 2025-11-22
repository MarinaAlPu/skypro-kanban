import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
// import { cards } from '../data.js';
import { GlobalStyle } from './GlobalStyles.js';
import { MainPage } from "../pages/Main.jsx";
import { ExitPage } from "../pages/Exit.jsx";
import { NewCardPage } from "../pages/NewCard.jsx";
import { PopBrowsePage } from "../pages/PopBrowse.jsx";
import { LoginPage } from "../pages/Login.jsx";
import { RegistrationPage } from "../pages/Registration.jsx";
import { NotFoundPage } from "../pages/NotFound.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { fetchTasks, postTask } from "../services/api";


// export function AppRoutes({ isAuth, setIsAuth, token, setToken }) {
export function AppRoutes({ token, setToken }) {
  const navigate = useNavigate();
  // const [isAuth, setIsAuth] = useState(false);
  // console.log(isAuth, " в AppRoutes");

  // console.log(cards);

  // const [isAuth, setIsAuth] = useState(false);
  // const [token, setToken] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, []);


  //   useEffect(() => {
  //   // Проверяем наличие токена в localStorage
  //   const storedToken = localStorage.getItem("userInfo");
  //   console.log(storedToken);
  //   if (storedToken) {
  //     const userInfo = JSON.parse(storedToken);
  //     console.log(userInfo.token);
  //     setToken(userInfo.token); // Устанавливаем токен из localStorage
  //     setIsAuth(true); // Устанавливаем состояние авторизации
  //   }
  // }, []);


  // const [cardsArrState, setCardsArrState] = useState(cards);
  // const [cardsArrState, setCardsArrState] = useState([]);

  // const [tasks, setTasks] = useState([]);
  // const [error, setError] = useState("");

  // let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // // console.log("userInfo: ", userInfo);
  // // let token = "";
  // if (userInfo) {
  //   // token = userInfo.token;
  //   // // console.log("token: ", token);
  //   // return token;

  //   setToken(userInfo.token)
  // }

  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({
        // token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
        token: token,
      });
      // console.log("data в getTasks");
      // console.log(data);
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // useEffect(() => {
  //   getTasks();
  // }, [getTasks]);

  useEffect(() => {
    if (token) { // Проверяем, есть ли токен
      // console.log("token в AppRouts");
      // console.log(token);
      getTasks();
      navigate("/");
    }
  }, [getTasks, token]);

  const addTask = ({ token, newTask }) => {
    postTask({ token, newTask })
      .then((data) => {
        // setCardsArrState((prevTasks) => [...prevTasks, data]);
        // setCardsArrState(data);
        setTasks(data);
      })
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        {/* <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage setIsAuth={setIsAuth} tasks={tasks} isLoading={isLoading} error={error} />} >
            <Route path="/card/add" element={<NewCardPage isAuth={isAuth} addTask={addTask} />} />
            <Route path="/card/:id" element={<PopBrowsePage isAuth={isAuth} />} />
            <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} setToken={setToken} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage isAuth={isAuth} />} /> */}
        <Route element={<PrivateRoute token={token}/>}>
          <Route path="/" element={<MainPage  tasks={tasks} isLoading={isLoading} error={error} />} >
            <Route path="/card/add" element={<NewCardPage  addTask={addTask} />} />
            <Route path="/card/:id" element={<PopBrowsePage  />} />
            <Route path="/exit" element={<ExitPage  />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage  setToken={setToken} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage  />} />
      </Routes>
    </>
  )
}




// import * as React from "react";

// const MOBILE_BREAKPOINT = 768;

// export function useIsMobile() {
// const [isMobile, setIsMobile] = React.useState(undefined);

// React.useEffect(() => {
// const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

// const onChange = () => {
// setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
// };

// mql.addEventListener("change", onChange);
// setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

// return () => {
// mql.removeEventListener("change", onChange);
// };
// }, []);

// return !!isMobile;
// }


// function MyComponent() {
// const isMobile = useIsMobile();

// return (

// {isMobile ? "Мобильная версия" : "Десктопная версия"}

// );
// }

















// export function AppRoutes({ isAuth, setIsAuth }) {
//   const [token, setToken] = useState(null);

//   const [isLoading, setIsLoading] = useState(true);

//   const [tasks, setTasks] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false)
//     }, 1000);
//   }, []);


//     useEffect(() => {
//     const storedToken = localStorage.getItem("userInfo");
//     console.log(storedToken);
//     if (storedToken) {
//       const userInfo = JSON.parse(storedToken);
//       console.log(userInfo.token);
//       setToken(userInfo.token);
//       setIsAuth(true);
//     }
//   }, []);

//   const getTasks = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const data = await fetchTasks({
//         token: token,
//       });
//       if (data) setTasks(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [token]);

//   useEffect(() => {
//     if (token) {
//       getTasks();
//     }
//   }, [getTasks, token]);

//   const addTask = ({ token, newTask }) => {
//     postTask({ token, newTask })
//       .then((data) => {
//         setTasks(data);
//       })
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <Routes>
//         <Route element={<PrivateRoute isAuth={isAuth} />}>
//           <Route path="/" element={<MainPage setIsAuth={setIsAuth} tasks={tasks} isLoading={isLoading} error={error} />} >
//             <Route path="/card/add" element={<NewCardPage isAuth={isAuth} addTask={addTask} />} />
//             <Route path="/card/:id" element={<PopBrowsePage isAuth={isAuth} />} />
//             <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
//           </Route>
//         </Route>

//         <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} setToken={setToken} />} />
//         <Route path="/registration" element={<RegistrationPage />} />
//         <Route path="*" element={<NotFoundPage isAuth={isAuth} />} />
//       </Routes>
//     </>
//   )
// }