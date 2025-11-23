import { SWrapper, SName, SMail, SThemeButton, SThemeTitle, SThemeInput, SButtonWrapper } from "./PopUser.styled";
import { Button } from "../../button/Button";
import { Link } from "react-router-dom";


export const PopUser = ({setIsPopUserOpen}) => {
  const handleLogoutClick = () => {
    setIsPopUserOpen(false);
  };

  return (
    <SWrapper id="user-set-target" >
      <SName>Ivan Ivanov</SName>
      <SMail>ivan.ivanov@gmail.com</SMail>
      <SThemeButton>
        <SThemeTitle>Темная тема</SThemeTitle>
        <SThemeInput type="checkbox" name="checkbox" />
      </SThemeButton>
      <SButtonWrapper>
        <Link to="/exit" onClick={handleLogoutClick}>
          <Button text="Выйти" type="secondary" width="72px" disabled={false}></Button>
        </Link>
      </SButtonWrapper>
    </SWrapper>
  )
}