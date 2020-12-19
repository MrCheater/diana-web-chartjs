import Cookies from "cookies";

import { deleteUser, updateUser } from "../../utils/database";

export const config = {
  api: {
    bodyParser: true,
  },
};

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const cookies = new Cookies(req, res);
      if (cookies.get("isAdmin") !== "true") {
        throw new Error("Access denied");
      }

      const { method } = req.body;
      switch (method) {
        case "update": {
          const { name, login, age, city } = req.body;

          if (name == null) {
            throw new Error(`Required field: "name"`);
          }
          if (login == null) {
            throw new Error(`Required field: "login"`);
          }
          if (age == null) {
            throw new Error(`Required field: "age"`);
          }
          if (city == null) {
            throw new Error(`Required field: "city"`);
          }

          await updateUser({ name, login, age, city });

          break;
        }
        case "delete": {
          const { login } = req.body;

          await deleteUser({ login });

          break;
        }
        default: {
          throw new Error(`Unknown method: ${method}`);
        }
      }

      res.end();
    } catch (error) {
      res.statusCode = error.code != null ? error.code : 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
}

export default handler;
