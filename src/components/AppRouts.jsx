import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from './GlobalStyles.js';
import { MainPage } from "../pages/Main.jsx";
import { ExitPage } from "../pages/Exit.jsx";
import { NewCardPage } from "../pages/NewCard.jsx";
import { PopBrowsePage } from "../pages/PopBrowse.jsx";
import { LoginPage } from "../pages/Login.jsx";
import { RegistrationPage } from "../pages/Registration.jsx";
import { NotFoundPage } from "../pages/NotFound.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { useTasks } from "./useTasks.jsx";


export function AppRoutes({ token, setToken }) {
  const { tasks, error, isLoading, setIsLoading, addTask } = useTasks(token);

  return (
    <>
      <GlobalStyle />
      <Routes>
        {/* <Route element={<PrivateRoute token={token} />}> */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage token={token} tasks={tasks} isLoading={isLoading} error={error} />} >
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
