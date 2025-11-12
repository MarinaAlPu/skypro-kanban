import { SPageBackground, SWrapper, STitle, SForm, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login, registration } from "../../services/auth";
// import { validateForm } from "../../utils/helpers";


export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", login: "", password: "" });
  const [errors, setErrors] = useState({ name: false, login: false, password: false });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [buttonType, setButtonType] = useState("primary");

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    // let isValid = true;

    // ошибки при регистрации (пустые поля)
    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }
    
    if (isSignUp && !formData.login.trim()) {
      newErrors.login = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }
    
    if (isSignUp && !formData.password.trim()) {
      newErrors.password = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }

    // ошибки при регистрации (меньше 3 символов)
    if (isSignUp && formData.name.length < 3) {
      newErrors.name = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }
    
    if (isSignUp && formData.login.length < 3) {
      newErrors.login = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }
    
    if (isSignUp && formData.password.length < 3) {
      newErrors.password = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }
      
    // // ошибки в почте
    // if (isSignUp && !formData.login.includes("@")) {
    //   newErrors.login = true;
    //   // setError("Заполните все поля");
    //   setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
    //   // isValid = false;
    //   setIsValid(false);
    //   setButtonType("tertiary");
    // }

    // ошибки при входе (пустые поля)
    if (!isSignUp && !formData.login.trim()) {
      newErrors.login = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }
    
    if (!isSignUp && !formData.password.trim()) {
      newErrors.password = true;
      // setError("Заполните все поля");
      setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
      // isValid = false;
      setIsValid(false);
      setButtonType("tertiary");
    }

    setErrors(newErrors);
    setIsValid(true);
    return isValid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: false });
    setError("");
    if(validateForm()) {
      setButtonType("primary");
    };
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp ? await login({ login: formData.login, password: formData.password }) : await registration(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <SPageBackground>
      <SWrapper style={{ height: "329px" }}>
        <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
        <SForm id="form" onSubmit={handleLogin}>

          <SInputWrapper>
            {isSignUp && (<Input error={errors.name} type="text" placeholder="Имя" name="name" value={formData.name} onChange={handleChange} />)}
            <Input error={errors.login} type="text" placeholder="Эл. почта" name="login" value={formData.login} onChange={handleChange} />
            <Input error={errors.password} type="password" placeholder="Пароль" name="password" value={formData.password} onChange={handleChange} />
          </SInputWrapper>

          <SErrorMessageWrapper><SErrorMessageText>{error}</SErrorMessageText></SErrorMessageWrapper>
          {/* <SErrorMessageWrapper>
            <SErrorMessageText>Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.</SErrorMessageText>
          </SErrorMessageWrapper> */}

          {/* <SErrorMessageWrapper>
            <SErrorMessageText>Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.</SErrorMessageText>
          </SErrorMessageWrapper> */}

          {/* <SErrorMessageWrapper>
            <SErrorMessageText>Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.</SErrorMessageText>
          </SErrorMessageWrapper> */}

          {/* {isValid ? <Button text={isSignUp ? "Зарегистрироваться" : "Войти"} type="primary" disabled={false} /> : <Button text={isSignUp ? "Зарегистрироваться" : "Войти"} type="tertiary" disabled={true} />} */}

          <Button 
            text={isSignUp ? "Зарегистрироваться" : "Войти"} 
            // type={isValid ? "primary" : "tertiary"} 
            type={buttonType} 
            disabled={!isValid}
          />


          {!isSignUp && (
            <SFooterWrapper>
              <SFooterText>Нужно зарегистрироваться?</SFooterText>
              <SFooterLink to="/registration">
                Регистрируйтесь здесь
              </SFooterLink>
            </SFooterWrapper>
          )}

          {isSignUp && (
            <SFooterWrapper>
              <SFooterText>
                Уже есть аккаунт? <SFooterLink to="/login">Войдите здесь</SFooterLink>
              </SFooterText>
            </SFooterWrapper>
          )}

        </SForm>
      </SWrapper>
    </SPageBackground>
  )
}





