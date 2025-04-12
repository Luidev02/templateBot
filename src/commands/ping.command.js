import { SlashCommandBuilder } from "discord.js";
import logger from "../utils/logger.util.js";

export default {
    data: new SlashCommandBuilder()
        .setName('ping') 
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        logger.info(`Ping command executed by ${interaction.user.tag} in guild ${interaction.guild.name}`);
        await interaction.reply('Pong!');
    },
};