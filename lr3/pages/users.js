import Layout from "../components/Layout";
import UsersPage from "../components/UsersPage";
import getServerSideProps from "../utils/getServerSideProps";

function Page() {
  return (
    <Layout>
      <UsersPage />
    </Layout>
  );
}

export default Page;

export { getServerSideProps };
