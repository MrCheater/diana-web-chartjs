import Layout from "../components/Layout";
import LogoutPage from "../components/LogoutPage";
import getServerSideProps from "../utils/getServerSideProps";

function Page() {
  return (
    <Layout>
      <LogoutPage />
    </Layout>
  );
}

export default Page;

export { getServerSideProps };
