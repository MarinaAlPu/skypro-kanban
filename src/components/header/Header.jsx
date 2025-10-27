import { useState, useEffect } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import { SHeader, SHeaderContainer, SHeaderBlock, SHeaderLogo, SHeaderLogoLight, SHeaderLogoDark, SHeaderNavigation, SButtonWrapper, SHeaderButton, SHeaderButtonLink, SHeaderLink } from "./Header.styled";
import { Button } from "../button/Button";


export const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const handleClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
  };


  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          {/* <SHeaderLogo className="_show _light"> */}
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoLight src="images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          {/* <SHeaderLogo className="_dark"> */}
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoDark src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderNavigation>
            {/* <SHeaderButton id="btnMainNew"> */}
            <SButtonWrapper>
              <Button href="#popNewCard" width="178px" type="primary" text="Создать новую задачу" disabled={false}>
                {/* <SHeaderButtonLink >Создать новую задачу</SHeaderButtonLink> */}
              </Button>
            </SButtonWrapper>
            {/* </SHeaderButton> */}
            <SHeaderLink href="#user-set-target" onClick={handleClick}>Ivan Ivanov</SHeaderLink>
            {/* <PopUser />
            <PopUser isPopUserOpen={isPopUserOpen} /> */}
            {isPopUserOpen && <PopUser />}
          </SHeaderNavigation>
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader >
  );
};
