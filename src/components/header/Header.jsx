import { useState, useEffect } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import { SHeader, SHeaderContainer, SHeaderBlock, SHeaderLogo, SHeaderLogoLight, SHeaderLogoDark, SHeaderNavigation, SHeaderButton, SHeaderButtonLink } from "./Header.styled";


export const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const handleClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
  };


  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderLogo className="_show _light">
            <a href="" target="_self">
              <SHeaderLogoLight src="images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogo className="_dark">
            <a href="" target="_self">
              <SHeaderLogoDark src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderNavigation>
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
