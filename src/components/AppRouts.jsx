import { Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Main } from './main/Main.jsx';
// import { Header } from './header/Header.jsx';
// import {Column} from './column/Column.jsx';
// import {Card} from './card/Card.jsx';
// import {Calendar} from './calendar/Calendar.jsx';
import { PopBrowse } from './popups/popBrowse/PopBrowse.jsx';
// import { PopNewCard } from './popups/popNewCard/PopNewCard.jsx';
// import PopUser from './popups/popUser/PopUser.jsx';
// import { PopExit } from './popups/popExit/PopExit.jsx';
import { cards } from '../data.js';
import { GlobalStyle } from './GlobalStyles.js';
import { MainPage } from "../pages/Main.jsx";
import { ExitPage } from "../pages/Exit.jsx";
import { NewCardPage } from "../pages/NewCard.jsx";
// import { PopBrowsePage } from "../pages/PopBrowse.jsx";


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
      {isLoading && <PopBrowse isLoading={isLoading} />}
      <Routes>
        {/* <!-- pop-up start--> */}

        <Route path="/exit" element={<ExitPage />} />
        <Route path="/create-new-card" element={<NewCardPage />} />

        {/* <Route path="/loading" element={isLoading && <PopBrowsePage isLoading={isLoading} />} /> */}

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
//         <MainPage cards={cards} />
//       </Wrapper>
//     </>
//   )
// }