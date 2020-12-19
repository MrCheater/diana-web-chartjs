import Cookies from "cookies";

import { initializeStore } from "../redux/store";
import { initialState } from "../redux/reducer";
import { listUsers, findUser } from "./database";

async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);

  const login = cookies.get("login");

  const state = { ...initialState };

  if (login != null) {
    state.login = login;
    const user = await findUser({ login });
    if (user != null) {
      Object.assign(state, user);
    }
  }

  if (state.isAdmin) {
    state.users = await listUsers({ isAdmin: true });
  }

  const reduxStore = initializeStore(state);

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default getServerSideProps;
