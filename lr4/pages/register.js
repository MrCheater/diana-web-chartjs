import Layout from "../components/Layout";
import RegisterPage from "../components/RegisterPage";
import getServerSideProps from "../utils/getServerSideProps";

function Page() {
  return (
    <Layout>
      <RegisterPage />
    </Layout>
  );
}

export default Page;

export { getServerSideProps };
