import React from "react";
import { useSelector } from "react-redux";

const RegisterPage = () => {
  const localization = useSelector(({ localization }) => localization);

  return (
    <>
      <form action="/api/register" method="POST" className="auth-form ">
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userName}</div>
          <input className="auth-form__input" name="name" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userLogin}</div>
          <input className="auth-form__input" name="login" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userPassword}</div>
          <input className="auth-form__input" name="password" type="password" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userCity}</div>
          <input className="auth-form__input" name="city" type="text" />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userAge}</div>
          <input className="auth-form__input" name="age" type="number" />
        </div>
        <div className="auth-form__row">
          <input
            className="auth-form__input"
            value={localization.register}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
