import { SPageBackground, SWrapper, STitle, SForm, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { Link, useNavigate } from "react-router-dom";


export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    // console.log("ВЫзвали функцию handleLogin");
    e.preventDefault();
    setIsAuth(true);
    // console.log("Поменяли состояние isAuth");
    navigate("/");
    // console.log('Перешли по адресу "/"');
  }

  return (
    <SPageBackground>
      <SWrapper style={{ height: "329px" }}>
        <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
        <SForm id="form" onSubmit={handleLogin}>

          <SInputWrapper>
            {isSignUp && (<Input type="text" placeholder="Имя" />)}
            <Input type="text" placeholder="Эл. почта" />
            <Input type="password" placeholder="Пароль" />
          </SInputWrapper>

          <Button text={isSignUp ? "Зарегистрироваться" : "Войти"} type="primary" disabled={false} />

          {!isSignUp && (
            <SFooterWrapper>
              <SFooterText>Нужно зарегистрироваться?</SFooterText>
              {/* <SFooterLink>Регистрируйтесь здесь</SFooterLink> */}
              <SFooterLink to="/registration">
                Регистрируйтесь здесь
              </SFooterLink>
            </SFooterWrapper>
          )}

          {isSignUp && (
            <SFooterWrapper>
              <SFooterText>
                Уже есть аккаунт? <SFooterLink to="/login">Войдите здесь</SFooterLink>
                {/* <SFooterLink>Войдите здесь</SFooterLink> */}
              </SFooterText>
            </SFooterWrapper>
          )}

        </SForm>
      </SWrapper>
    </SPageBackground>
  )
}
