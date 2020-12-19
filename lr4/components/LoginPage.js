import React from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const localization = useSelector(({ localization }) => localization);

  return (
    <>
      <form action="/api/login" method="POST" className="auth-form ">
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userLogin}</div>
          <input className="auth-form__input" name="login" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userPassword}</div>
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
