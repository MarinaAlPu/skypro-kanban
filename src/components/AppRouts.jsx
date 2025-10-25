import { Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Main } from './main/Main.jsx';
// import { Header } from './header/Header.jsx';
// import {Column} from './column/Column.jsx';
// import {Card} from './card/Card.jsx';
// import {Calendar} from './calendar/Calendar.jsx';
// import { PopBrowse } from './popups/popBrowse/PopBrowse.jsx';
// import { PopNewCard } from './popups/popNewCard/PopNewCard.jsx';
// import PopUser from './popups/popUser/PopUser.jsx';
// import { PopExit } from './popups/popExit/PopExit.jsx';
import { cards } from '../data.js';
import { GlobalStyle } from './GlobalStyles.js';
import { MainPage } from "../pages/Main.jsx";
import { PopExitPage } from "../pages/PopExit.jsx";
import { PopNewCardPage } from "../pages/PopNewCard.jsx";
import { PopBrowsePage } from "../pages/PopBrowse.jsx";


export function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      <GlobalStyle />
      <Routes>
        {/* <!-- pop-up start--> */}

        <Route path="/exit" element={<PopExitPage />} />
        <Route path="/create-new-card" element={<PopNewCardPage />} />

        <Route path="/loading" element={isLoading && <PopBrowsePage isLoading={isLoading} />} />

        {/* <!-- pop-up end--> */}

        {/* <Header /> */}
        <Route path="/" element={<MainPage cards={cards} />} />

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
//         <Route path="/" element={<MainPage cards={cards} />} />
//       </Wrapper>
//     </>
//   )
// }