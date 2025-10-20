import { useState, useEffect } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import { SHeader, SHeaderContainer, SHeaderBlock, SHeaderLogo, SHeaderLogoLight, SHeaderLogoDark, SHeaderNavigation, SHeaderButton, SHeaderButtonLink } from "./Header.styled";


export const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const handleClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
  };


  return (
    // <header className="header">
    <SHeader>
      {/* <div className="container"> */}
      <SHeaderContainer>
        {/* <div className="header__block"> */}
        <SHeaderBlock>
          {/* <div className="header__logo _show _light"> */}
          {/* <SHeaderLogo className="_show _light"> */}
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoLight src="images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          {/* <div className="header__logo _dark"> */}
          {/* <SHeaderLogo className="_dark"> */}
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoDark src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          {/* <nav className="header__nav"> */}
          <SHeaderNavigation>
            {/* <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button> */}
            <SHeaderButton id="btnMainNew">
              <SHeaderButtonLink href="#popNewCard">Создать новую задачу</SHeaderButtonLink>
            </SHeaderButton>
            <a href="#user-set-target" className="header__user _hover02"
              onClick={handleClick}
            >Ivan Ivanov</a>
            {/* <PopUser />
            <PopUser isPopUserOpen={isPopUserOpen} /> */}
            {isPopUserOpen && <PopUser />}
          </SHeaderNavigation>
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader >
  );
};
