import { useEffect } from "react";

const LogoutPage = () => {
  useEffect(() => {
    window.location = "/api/logout";
  });

  return null;
};

export default LogoutPage;
