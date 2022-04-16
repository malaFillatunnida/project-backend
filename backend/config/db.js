import { Sequelize } from "sequelize";

const db = new Sequelize("blog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
