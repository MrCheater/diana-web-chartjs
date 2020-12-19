import Cookies from "cookies";
import formidable from "formidable";

import { findUser } from "../../utils/database";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const form = new formidable.IncomingForm();

      const fields = await new Promise((resolve, reject) =>
        form.parse(req, (err, fields) => {
          if (err != null) {
            reject(err);
          } else {
            resolve(fields);
          }
        })
      );

      const { login, password } = fields;
      if (login == null) {
        throw new Error(`Required field: "login"`);
      }
      if (password == null) {
        throw new Error(`Required field: "password"`);
      }

      const cookies = new Cookies(req, res);

      const user = await findUser({ login, password });

      if (user == null) {
        throw new Error(`User does not exists: ${login}`);
      }

      const { isAdmin } = user;

      cookies.set("login", login, {
        httpOnly: true,
      });
      cookies.set("isAdmin", isAdmin, {
        httpOnly: true,
      });

      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    } catch (error) {
      res.writeHead(302, {
        Location: `/?errorMessage=${error.message}`,
      });
      res.end();
    }
  } else {
    res.writeHead(302, {
      Location: `/?errorMessage=Not found`,
    });
    res.end();
  }
}

export default handler;
