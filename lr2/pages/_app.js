import { Provider } from "react-redux";

import "../public/styles.css";
import { useStore } from "../redux/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
