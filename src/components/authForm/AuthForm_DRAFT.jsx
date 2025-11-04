import { SPageBackground, SWrapper, STitle, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";


export const AuthFormDRAFT = () => {
  return (
    <SPageBackground>
      <SWrapper style={{ height: "329px" }}>
        <STitle>Вход</STitle>
        <SInputWrapper>
          <Input type="text" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />
        </SInputWrapper>
        <Button text="Войти" type="primary" disabled={false} />
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
        <Button text="Войти" type="tertiary" disabled={true} />
        <SFooterWrapper>
          <SFooterText>Нужно зарегистрироваться?</SFooterText>
          <SFooterLink>Регистрируйтесь здесь</SFooterLink>
        </SFooterWrapper>
      </SWrapper>

      <SWrapper style={{ height: "345px" }}>
        <STitle>Регистрация</STitle>
        <SInputWrapper>
          <Input type="text" placeholder="Имя" />
          <Input type="text" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />
        </SInputWrapper>
        <Button text="Зарегистрироваться" type="primary" disabled={false} />
        <SFooterWrapper style={{ flexDirection: "row", gap: "7px" }}>
          <SFooterText>Уже есть аккаунт?</SFooterText>
          <SFooterLink>Войдите здесь</SFooterLink>
        </SFooterWrapper>
      </SWrapper>

      <SWrapper style={{ height: "406px" }}>
        <STitle>Регистрация</STitle>
        <SInputWrapper>
          <Input type="text" placeholder="Имя" />
          <Input type="text" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />
          <SErrorMessageText>Введенные вами данные не корректны.
            Чтобы завершить регистрацию, заполните все поля в форме.</SErrorMessageText>
        </SInputWrapper>
        <Button text="Зарегистрироваться" type="tertiary" disabled={true} />
        <SFooterWrapper style={{ flexDirection: "row", gap: "7px" }}>
          <SFooterText>Уже есть аккаунт?</SFooterText>
          <SFooterLink>Войдите здесь</SFooterLink>
        </SFooterWrapper>
      </SWrapper>

      <SWrapper style={{ height: "406px" }}>
        <STitle>Регистрация</STitle>
        <SInputWrapper>
          <Input type="text" placeholder="Имя" />
          <Input type="text" placeholder="Эл. почта" />
          <Input type="password" placeholder="Пароль" />
          <SErrorMessageText>Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.</SErrorMessageText>
        </SInputWrapper>
        <Button text="Зарегистрироваться" type="tertiary" disabled={true} />
        <SFooterWrapper style={{ flexDirection: "row", gap: "7px" }}>
          <SFooterText>Уже есть аккаунт?</SFooterText>
          <SFooterLink>Войдите здесь</SFooterLink>
        </SFooterWrapper>
      </SWrapper>

    </SPageBackground>
  )
}