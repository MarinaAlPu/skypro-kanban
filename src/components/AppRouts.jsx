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


export function AppRoutes({isAuth, setIsAuth}) {
  // const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth, " в AppRoutes");
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage setIsAuth={setIsAuth} cards={cards} />} >
            <Route path="/card/add" element={<NewCardPage isAuth={isAuth} />} />
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
