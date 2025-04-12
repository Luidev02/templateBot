import { Sequelize } from "sequelize";
import config from "./variables.config.js";

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: "mysql",
    port: config.DB_PORT,
    logging: false, // Cambia a true si deseas ver las consultas SQL en la consola
  }
);


export default sequelize;