import { useState, useEffect } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import { SHeader, SHeaderContainer, SHeaderBlock, SHeaderLogo, SHeaderLogoLight, SHeaderLogoDark, SHeaderNavigation, SButtonWrapper, SHeaderButton, SHeaderButtonLink, SHeaderLink } from "./Header.styled";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";


export const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const handleClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
  };


  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoLight src="/images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoDark src="/images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderNavigation>
            <SButtonWrapper>
              <Link to="/card/add">
                <Button href="#popNewCard" width="178px" type="primary" text="Создать новую задачу" disabled={false}>
                </Button>
              </Link>
            </SButtonWrapper>
            <SHeaderLink href="#user-set-target" onClick={handleClick}>Ivan Ivanov</SHeaderLink>
            {isPopUserOpen && <PopUser />}
          </SHeaderNavigation>
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader >
  );
};
