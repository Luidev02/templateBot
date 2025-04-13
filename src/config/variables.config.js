import dotenv from 'dotenv';

dotenv.config();

export default {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN ,
    CLIENT_ID: process.env.CLIENT_ID,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    KEY_MISTRAL: process.env.KEY_MISTRAL,
}
