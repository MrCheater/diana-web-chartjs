import Layout from "../components/Layout";
import ProfilePage from "../components/ProfilePage";
import getServerSideProps from "../utils/getServerSideProps";

function Page() {
  return (
    <Layout>
      <ProfilePage />
    </Layout>
  );
}

export default Page;

export { getServerSideProps };
