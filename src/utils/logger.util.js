import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la raíz del proyecto
const rootPath = path.join(__dirname, '../../');

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `[${level}]: ${timestamp}: ${message}`;
});

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        customFormat // Aplica el formato personalizado
    ),
    transports: [
        new winston.transports.Console(), // Mostrar logs en consola
        new winston.transports.File({ 
            filename: path.join(rootPath, 'logs/error.log'), 
            level: 'error', // Solo errores
            format: winston.format.combine(
                winston.format.timestamp(),
                customFormat
            )
        }),
        new winston.transports.File({ 
            filename: path.join(rootPath, 'logs/info.log'), 
            level: 'info', // Solo información
            format: winston.format.combine(
                winston.format.timestamp(),
                customFormat
            )
        })
    ],
});

export default logger;