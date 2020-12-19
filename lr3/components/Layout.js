import Link from "next/link";
import { useSelector } from "react-redux";

const isEmpty = (item) => item == null || item == "";

const Layout = ({ children }) => {
  const login = useSelector(({ login }) => login);
  const isAdmin = useSelector(({ isAdmin }) => isAdmin);

  return (
    <div className="layout">
      <div className="layout__menu">
        <Link href="/">
          <a className="layout__menu-item">Домашняя</a>
        </Link>
        {!isEmpty(login) ? null : (
          <Link href="/register">
            <a className="layout__menu-item layout__menu-item--right">
              Зарегистрироваться
            </a>
          </Link>
        )}
        {!isEmpty(login) ? null : (
          <Link href="/login">
            <a className="layout__menu-item layout__menu-item--right">Войти</a>
          </Link>
        )}
        {!isEmpty(login) ? (
          <Link href="/profile">
            <a className="layout__menu-item layout__menu-item--right">
              Профиль ({login})
            </a>
          </Link>
        ) : null}
        {!isEmpty(login) ? (
          <Link href="/logout">
            <a className="layout__menu-item layout__menu-item--right">Выйти</a>
          </Link>
        ) : null}
        {!isEmpty(login) && isAdmin ? (
          <Link href="/users">
            <a className="layout__menu-item">Пользователи</a>
          </Link>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default Layout;
