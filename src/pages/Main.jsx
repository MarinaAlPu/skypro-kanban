// import styled from "styled-components";
// import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";


// const Wrapper = styled.div`
//   max-width: 100%;
//   width: 100vw;
//   min-height: 100vh;
//   overflow: hidden;
//   background-color: #F1F1F1;
// `;

export const MainPage = ({ cards }) => {
  return (
    <Main cards={cards} />
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