import { Provider } from "react-redux";

import "../public/styles.css";
import { useStore } from "../redux/store";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
