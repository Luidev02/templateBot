import sequelize from "../config/sequelize.config.js";

const config = sequelize.define("config", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    guildId: {
        type: sequelize.STRING,
        allowNull: false,
    },
    welcomeChannel: {
        type: sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    }, {
    timestamps: true,
})


export default config;