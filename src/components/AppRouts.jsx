import { Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Main } from './main/Main.jsx';
// import { Header } from './header/Header.jsx';
// import {Column} from './column/Column.jsx';
// import {Card} from './card/Card.jsx';
// import {Calendar} from './calendar/Calendar.jsx';
// import { PopBrowse } from './popups/popBrowse/PopBrowse.jsx';
// import { Loader } from "./loader/Loader.jsx";
// import { PopNewCard } from './popups/popNewCard/PopNewCard.jsx';
// import PopUser from './popups/popUser/PopUser.jsx';
// import { PopExit } from './popups/popExit/PopExit.jsx';
import { cards } from '../data.js';
import { GlobalStyle } from './GlobalStyles.js';
import { MainPage } from "../pages/Main.jsx";
import { ExitPage } from "../pages/Exit.jsx";
import { NewCardPage } from "../pages/NewCard.jsx";
import { PopBrowsePage } from "../pages/PopBrowse.jsx";
// import { EditCardPage } from "../pages/EditCard.jsx";
import { LoginPage } from "../pages/Login.jsx";
import { RegistrationPage } from "../pages/Registration.jsx";
import { NotFoundPage } from "../pages/NotFound.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";


export function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000);
  // }, [])

  return (
    <>
      <GlobalStyle />
      {/* {isLoading && <Loader isLoading={isLoading} />} */}
      <Routes>
        {/* <!-- pop-up start--> */}

        {/* <Route path="/loading" element={isLoading && <PopBrowsePage isLoading={isLoading} />} /> */}

        {/* <!-- pop-up end--> */}

        {/* <Header /> */}

        <Route element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path="/" element={<MainPage setIsAuth={setIsAuth} cards={cards} />} >
            <Route path="/card/add" element={<NewCardPage isAuth={isAuth}/>} />
            <Route path="/card/:id" element={<PopBrowsePage isAuth={isAuth}/>} />
            <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth}/>} />
          </Route>
        </Route>

        {/* <Route path="/card/add" element={<NewCardPage />} /> */}
        {/* <Route path="/card/edit" element={<PopBrowsePage />} /> */}
        {/* <Route path="/exit" element={<ExitPage />} /> */}

        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}


// export function AppRoutes() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false)
//     }, 3000);
//   }, [])

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         < PopExit />
//         <PopNewCard />
//         {isLoading && <PopBrowse isLoading={isLoading} />}
//         <Header />
//         <MainPage cards={cards} />
//       </Wrapper>
//     </>
//   )
// }



// export function AppRoutes() {
//   const [isAuth, setIsAuth] = useState(true);

//   return (
//     <>
//       <GlobalStyle />
//       <Routes>
//         <Route element={<PrivateRoute isAuth={isAuth}/>}>
//           <Route path="/" element={<MainPage setIsAuth={setIsAuth} cards={cards} />} >
//             <Route path="/card/add" element={<NewCardPage isAuth={isAuth}/>} />
//             <Route path="/card/:id" element={<PopBrowsePage isAuth={isAuth}/>} />
//             <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth}/>} />
//           </Route>
//         </Route>

//         <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>} />
//         <Route path="/registration" element={<RegistrationPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </>
//   )
// }