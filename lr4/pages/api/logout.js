import Cookies from "cookies";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  const cookies = new Cookies(req, res);

  cookies.set("login", null, {
    httpOnly: true,
  });
  cookies.set("isAdmin", null, {
    httpOnly: true,
  });

  res.writeHead(302, {
    Location: "/",
  });
  res.end();
}

export default handler;
