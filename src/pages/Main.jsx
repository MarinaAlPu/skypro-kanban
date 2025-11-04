// import styled from "styled-components";
// import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../components/loader/Loader";


// const Wrapper = styled.div`
//   max-width: 100%;
//   width: 100vw;
//   min-height: 100vh;
//   overflow: hidden;
//   background-color: #F1F1F1;
// `;

export const MainPage = ({ setIsAuth, cards }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Main setIsAuth={setIsAuth} cards={cards} />
      <Outlet />
    </>
  )
}


// export const MainPage = ({ cards }) => {
//   return (
//     <Wrapper>
//       <Header />
//       <Main cards={cards} />
//     </Wrapper>
//   )
// }