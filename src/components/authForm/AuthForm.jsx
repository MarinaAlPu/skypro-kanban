import { SPageBackground, SWrapper, STitle, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";


export const AuthForm = () => {
  return (
    <SPageBackground>
      <SWrapper>
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
    </SPageBackground>
  )
}