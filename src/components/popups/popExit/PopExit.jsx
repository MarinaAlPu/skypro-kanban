import { SWrapper, SContainer, SBlock, SContent, STitle, SForm, SButtonWrapper } from "./PopExit.styled";
import { Button } from "../../button/Button";
import { Link, useNavigate } from "react-router-dom";


export const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <SWrapper>
      <SContainer>
        <SBlock>
          <SContent>
            <STitle>Выйти из аккаунта?</STitle>
            <SForm >
              <SButtonWrapper>
                <Button onClick={handleLogout} width="153px" text="Да, выйти" type="primary" disabled={false}></Button>
                <Link to="/">
                  <Button width="153px" text="Нет, остаться" type="secondary" disabled={false}></Button>
                </Link>
              </SButtonWrapper>
            </SForm>
          </SContent>
        </SBlock>
      </SContainer>
    </SWrapper>
  )
}