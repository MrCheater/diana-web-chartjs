import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const {
    login,
    name,
    city,
    age,
  } = useSelector(({ login, name, city, age }) => ({ login, name, city, age }));

  return (
    <>
      <form action="/api/profile" method="POST" className="auth-form ">
        <div className="auth-form__row">
          <div className="auth-form__label">Логин пользователя:</div>
          <input
            className="auth-form__input"
            type="text"
            defaultValue={login}
            disabled
          />
          <input
            className="auth-form__input"
            name="login"
            type="text"
            defaultValue={login}
            hidden
          />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Имя пользователя:</div>
          <input
            className="auth-form__input"
            name="name"
            type="text"
            defaultValue={name}
          />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Город проживания пользователя:</div>
          <input
            className="auth-form__input"
            name="city"
            type="text"
            defaultValue={city}
          />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">Возраст пользователя:</div>
          <input
            className="auth-form__input"
            name="age"
            type="number"
            defaultValue={age}
          />
        </div>
        <div className="auth-form__row">
          <input
            className="auth-form__input"
            value="Обновить профиль"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default ProfilePage;
