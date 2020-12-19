import Cookies from "cookies";
import formidable from "formidable";

import { registerUser } from "../../utils/database";

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

      const { name, login, password, age, city } = fields;
      if (name == null) {
        throw new Error(`Required field: "name"`);
      }
      if (login == null) {
        throw new Error(`Required field: "login"`);
      }
      if (password == null) {
        throw new Error(`Required field: "password"`);
      }
      if (age == null) {
        throw new Error(`Required field: "age"`);
      }
      if (city == null) {
        throw new Error(`Required field: "city"`);
      }

      const cookies = new Cookies(req, res);

      const { isAdmin } = await registerUser({
        name,
        login,
        password,
        age,
        city,
      });

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
