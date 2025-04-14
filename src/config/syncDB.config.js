import logger from "../utils/logger.util.js";
import sequelize from "./sequelize.config.js";

const configDB = {
  async sync() {
    try {
      await sequelize.sync({ alter: true });
      logger.info("Base de datos sincronizada correctamente");
    } catch (error) {
      logger.error("Error al sincronizar la base de datos:", error);
    }
  },
  async init() {
    try {
      await sequelize.authenticate();
        logger.info("Conexión a la base de datos establecida correctamente");
    } catch (error) {
      logger.error("Error de conexión a la base de datos:", error);
      process.exit(1); // Salir del proceso si no se puede conectar a la base de datos
    }
  },
};

export default configDB;