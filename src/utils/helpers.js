export const validateForm = (formData, isSignUp, setErrors, setError, setIsValid) => {
  const newErrors = { name: "", login: "", password: "" };
  let isValid = true;

  // ошибки при регистрации (пустые поля)
  if (isSignUp && !formData.name.trim()) {
    newErrors.name = true;
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
    setIsValid(false);
  } else if (isSignUp && !formData.login.trim()) {
    newErrors.login = true;
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
    setIsValid(false);
  } else if (isSignUp && !formData.password.trim()) {
    newErrors.password = true;
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
    setIsValid(false);
  }

  // ошибки при регистрации (меньше 3 символов)
  if (isSignUp && formData.name.length < 3) {
    newErrors.name = true;
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
    setIsValid(false);
  } else if (isSignUp && formData.login.length < 3) {
    newErrors.login = true;
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
    setIsValid(false);
  } else if (isSignUp && formData.password.length < 3) {
    newErrors.password = true;
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
    setIsValid(false);
  }

  // ошибки при входе (пустые поля)
  if (!isSignUp && !formData.login.trim()) {
    newErrors.login = true;
    setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
    setIsValid(false);
  } else if (!isSignUp && !formData.password.trim()) {
    newErrors.password = true;
    setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
    setIsValid(false);
  }

  setErrors(newErrors);
  return isValid;
  // return error;
}