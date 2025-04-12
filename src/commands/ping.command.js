import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import logger from "../utils/logger.util.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    // crear la respuesta embed pero que de el ping realmente
    const embed = new EmbedBuilder()
      .setColor(3447003)
      .setTitle("Pong!")
      .setDescription(`Ping: ${interaction.client.ws.ping}ms`)
      .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
    logger.info(
      `Ping command executed by ${interaction.user.tag} in guild ${
        interaction.guild?.name || "DM"
      }`
    );
  },
};
