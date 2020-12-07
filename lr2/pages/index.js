import Page from "../components/Page";
import { initializeStore } from "../redux/store";

export default function Index() {
  return <Page />;
}

export function getStaticProps() {
  const reduxStore = initializeStore();
  return { props: { initialReduxState: reduxStore.getState() } };
}
