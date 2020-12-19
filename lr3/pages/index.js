import Layout from "../components/Layout";
import IndexPage from "../components/IndexPage";
import getServerSideProps from "../utils/getServerSideProps";

function Page() {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
}

export default Page;

export { getServerSideProps };
