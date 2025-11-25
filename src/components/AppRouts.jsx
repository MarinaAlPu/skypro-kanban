import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
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


export function AppRoutes({ token, setToken }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");


  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks({
        token: token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTasks();
      navigate("/");
    }
  }, [getTasks, token]);

  
  const addTask = async ({ newTask }) => {
    setIsLoading(true);
    try {
      await postTask({ token, newTask })
        .then((data) => {
          setTasks(data);
        })
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute token={token} />}>
          <Route path="/" element={<MainPage tasks={tasks} isLoading={isLoading} error={error} />} >
            <Route path="/card/add" element={<NewCardPage token={token} addTask={addTask} isLoading={isLoading} setIsLoading={setIsLoading} />} />
            <Route path="/card/:id" element={<PopBrowsePage token={token} tasks={tasks} />} />
            <Route path="/exit" element={<ExitPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage token={!!token} />} />
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
