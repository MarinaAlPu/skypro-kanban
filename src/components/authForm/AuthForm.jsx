import { SPageBackground, SWrapper, STitle, SForm, SInputWrapper, SFooterWrapper, SFooterText, SFooterLink, SErrorMessageWrapper, SErrorMessageText } from "./AuthForm.styled";
import { Input } from "../Input/Input";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { login, registration } from "../../services/auth";
import { validateForm } from "../../utils/helpers";
import { AuthContext } from "../context/AuthContext";


export const AuthForm = ({ isSignUp, setToken }) => {
  const navigate = useNavigate();

  const { updateUserInfo } = useContext(AuthContext);

  const [formData, setFormData] = useState({ name: "", login: "", password: "" });
  const [errors, setErrors] = useState({ name: false, login: false, password: false });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setIsValid(true);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
    setError("");
  }

  const handleLogin = async (e) => {
    setIsValid(false);
    e.preventDefault();

    if (!validateForm(formData, isSignUp, setErrors, setError, setIsValid)) {
      return;
    }
    
    try {
      const data = !isSignUp ? await login({ login: formData.login, password: formData.password }) : await registration(formData);

      if (data) {
        // setToken(data.token);
        // localStorage.setItem("userInfo", JSON.stringify(data));
        updateUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
      setIsValid(false)
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

          <Button text={isSignUp ? "Зарегистрироваться" : "Войти"} type="primary" disabled={!isValid} />

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
