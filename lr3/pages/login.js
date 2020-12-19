import Layout from "../components/Layout";
import LoginPage from "../components/LoginPage";
import getServerSideProps from "../utils/getServerSideProps";

function Page() {
  return (
    <Layout>
      <LoginPage />
    </Layout>
  );
}

export default Page;

export { getServerSideProps };
