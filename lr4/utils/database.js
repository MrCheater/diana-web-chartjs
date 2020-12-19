import * as path from "path";
import sqlite from "sqlite";
import crypto from "crypto";

const escapeId = (str) => `"${String(str).replace(/(["])/gi, "$1$1")}"`;
const escapeStr = (str) => `'${String(str).replace(/(['])/gi, "$1$1")}'`;

const databaseFile = path.join(process.cwd(), "database.db");

const ensureDatabase = async () => {
  const database = await sqlite.open(databaseFile);
  try {
    await database.exec(
      `CREATE TABLE IF NOT EXISTS ${escapeId("users")} (
        ${escapeId("name")} TEXT NOT NULL,
        ${escapeId("login")} TEXT NOT NULL,
        ${escapeId("passwordHash")} TEXT NOT NULL,
        ${escapeId("city")} TEXT NOT NULL,
        ${escapeId("age")} INT NOT NULL,
        ${escapeId("isAdmin")} INT NOT NULL,
        PRIMARY KEY(${escapeId("login")})
      )`
    );

    try {
      const admin = await database.get(
        `SELECT * FROM ${escapeId("users")} 
      WHERE ${escapeId("login")} = ${escapeStr("admin")}`
      );
      if (admin == null) {
        await database.exec(
          `INSERT INTO ${escapeId("users")} (
            ${escapeId("name")},
            ${escapeId("login")},
            ${escapeId("passwordHash")},
            ${escapeId("city")},
            ${escapeId("age")},
            ${escapeId("isAdmin")}
          ) VALUES (
            ${escapeStr("admin")},
            ${escapeStr("admin")},
            ${escapeStr(
              crypto.createHash("md5").update("admin").digest("hex")
            )},
            ${escapeStr("database")},
            ${0},
            ${1}
          )`
        );
      }
    } catch (error) {}
  } finally {
    await database.close();
  }
};

export const listUsers = async ({ isAdmin }) => {
  if (!isAdmin) {
    throw new Error("Access denied");
  }

  await ensureDatabase();

  const database = await sqlite.open(databaseFile);
  try {
    const users = await database.all(`SELECT * FROM ${escapeId("users")}`);
    return users.map((user) => ({
      ...user,
      isAdmin: user.isAdmin !== 0,
    }));
  } finally {
    await database.close();
  }
};

export const findUser = async ({ login, password }) => {
  const passwordHash =
    password == null
      ? null
      : crypto.createHash("md5").update(password).digest("hex");

  await ensureDatabase();

  const database = await sqlite.open(databaseFile);
  try {
    const user = await database.get(
      `SELECT * FROM ${escapeId("users")} 
      WHERE ${escapeId("login")} = ${escapeStr(login)}
      ${
        passwordHash == null
          ? ""
          : `AND ${escapeId("passwordHash")} = ${escapeStr(passwordHash)}`
      }`
    );
    if (user != null) {
      user.isAdmin = user.isAdmin !== 0;
    }
    return user;
  } finally {
    await database.close();
  }
};

export const deleteUser = async ({ login }) => {
  await ensureDatabase();

  const database = await sqlite.open(databaseFile);
  try {
    await database.get(
      `DELETE FROM ${escapeId("users")} 
      WHERE ${escapeId("login")} = ${escapeStr(login)}`
    );
  } finally {
    await database.close();
  }
};

export const updateUser = async ({ name, login, age, city }) => {
  await ensureDatabase();

  const database = await sqlite.open(databaseFile);
  try {
    await database.exec(
      `UPDATE ${escapeId("users")}
      SET ${escapeId("name")} = ${escapeStr(name)},
          ${escapeId("age")} = ${escapeStr(age)},
          ${escapeId("city")} = ${escapeStr(city)}
      WHERE ${escapeId("login")} = ${escapeStr(login)}`
    );
  } finally {
    await database.close();
  }
};

export const registerUser = async ({
  name,
  login,
  password,
  city,
  age,
  isAdmin,
}) => {
  const passwordHash = crypto.createHash("md5").update(password).digest("hex");

  await ensureDatabase();

  const database = await sqlite.open(databaseFile);
  try {
    await database.exec(
      `INSERT INTO ${escapeId("users")} (
        ${escapeId("name")},
        ${escapeId("login")},
        ${escapeId("passwordHash")},
        ${escapeId("city")},
        ${escapeId("age")},
        ${escapeId("isAdmin")}
      ) VALUES (
        ${escapeStr(name)},
        ${escapeStr(login)},
        ${escapeStr(passwordHash)},
        ${escapeStr(city)},
        ${age},
        ${isAdmin ? 1 : 0}
      )`
    );
    return {
      name,
      login,
      password,
      city,
      age,
      isAdmin,
    };
  } catch (error) {
    if (`${error}`.includes("SQLITE_CONSTRAINT")) {
      throw new Error(`User already exists: ${login}`);
    }
  } finally {
    await database.close();
  }
};
