import { SPageBackground, SWrapper, STitle, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";


export const AuthForm = () => {
  return (
    <SPageBackground>
      <SWrapper style={{ height: "329px" }}>
        <STitle>Вход</STitle>
        <SInputWrapper>
          <Input type="text" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />
        </SInputWrapper>
        <Button text="Войти" type="secondary" disabled="false" />
        <SFooterWrapper>
          <SFooterText>Нужно зарегистрироваться?</SFooterText>
          <SFooterLink>Регистрируйтесь здесь</SFooterLink>
        </SFooterWrapper>
      </SWrapper>
      <SWrapper style={{ height: "390px" }}>
        <STitle>Вход</STitle>
        <SInputWrapper>
          <Input type="text" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />
          {/* <SErrorMessageWrapper> */}
          <SErrorMessageText>Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.</SErrorMessageText>
          {/* </SErrorMessageWrapper> */}
        </SInputWrapper>
        <Button text="Войти" type="tertiary" disabled="true" />
        <SFooterWrapper>
          <SFooterText>Нужно зарегистрироваться?</SFooterText>
          <SFooterLink>Регистрируйтесь здесь</SFooterLink>
        </SFooterWrapper>
      </SWrapper>
    </SPageBackground>
  )
}