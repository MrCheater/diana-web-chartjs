import formidable from "formidable";

import { updateUser } from "../../utils/database";

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

      const { name, login, age, city } = fields;
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

      res.writeHead(302, {
        Location: "/profile",
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
