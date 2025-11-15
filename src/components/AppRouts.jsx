import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { cards } from '../data.js';
import { GlobalStyle } from './GlobalStyles.js';
import { MainPage } from "../pages/Main.jsx";
import { ExitPage } from "../pages/Exit.jsx";
import { NewCardPage } from "../pages/NewCard.jsx";
import { PopBrowsePage } from "../pages/PopBrowse.jsx";
import { LoginPage } from "../pages/Login.jsx";
import { RegistrationPage } from "../pages/Registration.jsx";
import { NotFoundPage } from "../pages/NotFound.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { postTask } from "../services/api";


export function AppRoutes({ isAuth, setIsAuth }) {
  // const [isAuth, setIsAuth] = useState(false);
  // console.log(isAuth, " в AppRoutes");

  // console.log(cards);

  const [cardsArrState, setCardsArrState] = useState(cards);

  const addTask = (newTask) => {
    postTask(newTask)
      .then((data) => {
        // setCardsArrState((prevTasks) => [...prevTasks, data]);
        setCardsArrState(data);
      })
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage setIsAuth={setIsAuth} cards={cardsArrState} />} >
            <Route path="/card/add" element={<NewCardPage isAuth={isAuth} addTask={addTask} />} />
            <Route path="/card/:id" element={<PopBrowsePage isAuth={isAuth} />} />
            <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage isAuth={isAuth} />} />
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