import { useCallback } from 'react'
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import * as actions from '../redux/actions'

const isEmpty = (item) => item == null || item == "";

const Layout = ({ children }) => {
  const localization = useSelector(({ localization }) => localization);

  const login = useSelector(({ login }) => login);
  const isAdmin = useSelector(({ isAdmin }) => isAdmin);

  const dispatch = useDispatch();

  const setLocalizationRu = useCallback(
    (...args) => dispatch(actions.setLocalizationRu(...args)),
    [dispatch]
  );
  const setLocalizationEn = useCallback(
    (...args) => dispatch(actions.setLocalizationEn(...args)),
    [dispatch]
  );

  return (
    <div className="layout">
      <div className="layout__menu">
        <Link href="/">
          <a className="layout__menu-item">{localization.home}</a>
        </Link>
        <div className="layout__menu-item layout__menu-item--right" onClick={setLocalizationRu}>[RU]</div>
        <div className="layout__menu-item layout__menu-item--right" onClick={setLocalizationEn}>[EN]</div>
        {!isEmpty(login) ? null : (
          <Link href="/register">
            <a className="layout__menu-item layout__menu-item--right">
              {localization.register}
            </a>
          </Link>
        )}
        {!isEmpty(login) ? null : (
          <Link href="/login">
            <a className="layout__menu-item layout__menu-item--right">{localization.login}</a>
          </Link>
        )}
        {!isEmpty(login) ? (
          <Link href="/profile">
            <a className="layout__menu-item layout__menu-item--right">
              {localization.profile} ({login})
            </a>
          </Link>
        ) : null}
        {!isEmpty(login) ? (
          <Link href="/logout">
            <a className="layout__menu-item layout__menu-item--right">{localization.logout}</a>
          </Link>
        ) : null}
        {!isEmpty(login) && isAdmin ? (
          <Link href="/users">
            <a className="layout__menu-item">{localization.users}</a>
          </Link>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default Layout;
