import { SPageBackground, SWrapper, SContainer, SBlock, SContent, STitle, SForm, SButtonWrapper } from "./PopExit.styled";
import { Button } from "../../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const PopExit = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  // if (!isAuth) {
  //   navigate('/login');
  // }
  // });

  const handleLogout = (e) => {
    // console.log("Вызвали функцию handleLogout");
    e.preventDefault();
    setIsAuth(false);
    // console.log("Поменяли состояние isAuth");
    navigate("/login");
    // console.log('Перешли по адресу "/"');
  };

  return (
    // <div className="pop-exit" id="popExit">
    // <SPageBackground>
    <SWrapper>
      {/* <div className="pop-exit__container"> */}
      <SContainer>
        {/* <div className="pop-exit__block"> */}
        <SBlock>
          <SContent>
            {/* <div className="pop-exit__ttl"> */}
            {/* <h2>Выйти из аккаунта?</h2> */}
            <STitle>Выйти из аккаунта?</STitle>
            {/* </div> */}
            {/* <form className="pop-exit__form" id="formExit" action="#"> */}
            <SForm >
              {/* <div className="pop-exit__form-group"> */}
              <SButtonWrapper>
                {/* <button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button> */}
                <Button onClick={handleLogout} width="153px" text="Да, выйти" type="primary" disabled={false}></Button>
                {/* <button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button> */}
                <Link to="/">
                  <Button width="153px" text="Нет, остаться" type="secondary" disabled={false}></Button>
                </Link>
              </SButtonWrapper>
              {/* </div> */}
            </SForm>
            {/* </form> */}
          </SContent>
        </SBlock>
        {/* </div> */}
      </SContainer>
      {/* </div> */}
    </SWrapper>
    // </SPageBackground>
    // </div>
  )
}