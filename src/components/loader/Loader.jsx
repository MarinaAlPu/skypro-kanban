// import { SLoaderWrapper, SLoader, SLoaderText } from "./Loader.styled";


// export const Loader = () => {
//   return (
//     <SLoaderWrapper>
//       <SLoader id="loader">
//         <SLoaderText>Данные загружаются</SLoaderText>
//       </SLoader>
//     </SLoaderWrapper>
//   )
// }



// import { SkeletonWrapper, } from "./Loader.styled";

// export const Loader = ({ width="200px", height="200px", circle="100px" }) => {
//   return <SkeletonWrapper width={width} height={height} $circle={circle} />;
// };

// export const Loader = () => {
//   return (
//     <SkeletonCard>
//       <SkeletonElement height="20px" width="60%" />
//       <SkeletonElement height="150px" width="100%" />
//       <SkeletonElement height="20px" width="100%" />
//       <SkeletonElement height="20px" width="80%" />
//     </SkeletonCard>
//   );
// };


import { SCardContainer, SLeft, SRight, SSceleton } from "./Loader.styled";


export const Loader = () => {
  return (
    <SCardContainer>
      <SLeft>
        {/* <STopic />
        <STitle />
        <SDate /> */}
        <SSceleton $width="82px" $height="20px" $radius="18px" $marginbottom="15px" />
        <SSceleton $width="113px" $height="13px" $radius="0" $marginbottom="35px" />
        <SSceleton $width="58px" $height="13px" $radius="0" $marginbottom="0" />
      </SLeft>
      <SRight>
        {/* <SActionButton /> */}
        <SSceleton $width="18px" $height="4px" $radius="0" $marginbottom="0" />
      </SRight>
    </SCardContainer>
  )
};