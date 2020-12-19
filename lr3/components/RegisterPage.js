import React from "react";

const RegisterPage = () => {
  return (
    <>
      <form action="/api/register" method="POST" className="auth-form ">
        <div className="auth-form__row">
          <div className="auth-form__label">Имя пользователя:</div>
          <input className="auth-form__input" name="name" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Логин пользователя:</div>
          <input className="auth-form__input" name="login" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Пароль пользователя:</div>
          <input className="auth-form__input" name="password" type="password" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Город проживания пользователя:</div>
          <input className="auth-form__input" name="city" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Возраст пользователя:</div>
          <input className="auth-form__input" name="age" type="number" />
        </div>
        <div className="auth-form__row">
          <input
            className="auth-form__input"
            value="Регистрация"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
