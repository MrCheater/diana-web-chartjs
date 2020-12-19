import React from "react";

const LoginPage = () => {
  return (
    <>
      <form action="/api/login" method="POST" className="auth-form ">
        <div className="auth-form__row">
          <div className="auth-form__label">Логин пользователя:</div>
          <input className="auth-form__input" name="login" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Пароль пользователя:</div>
          <input className="auth-form__input" name="password" type="password" />
        </div>
        <div className="auth-form__row">
          <input className="auth-form__input" value="Login" type="submit" />
        </div>
      </form>
    </>
  );
};

export default LoginPage;
