import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const localization = useSelector(({ localization }) => localization);

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
          <div className="auth-form__label">{localization.userLogin}</div>
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
          <div className="auth-form__label">{localization.userName}</div>
          <input
            className="auth-form__input"
            name="name"
            type="text"
            defaultValue={name}
          />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userCity}</div>
          <input
            className="auth-form__input"
            name="city"
            type="text"
            defaultValue={city}
          />
        </div>
        <div className="auth-form__row">
          <div className="auth-form__label">{localization.userAge}</div>
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
            value={localization.updateProfile}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default ProfilePage;
