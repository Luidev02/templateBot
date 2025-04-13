import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import logger from "../../utils/logger.util.js";
import chatIAService from "../../services/chatIA.service.js";

export default {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Chat con la IA")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("El mensaje que quieres enviar a la IA")
        .setRequired(true)
    ),
  async execute(interaction) {
    if (!interaction.inGuild()) {
      return await interaction.reply({
        content: "❌ Este comando solo puede usarse dentro de un servidor.",
        ephemeral: true,
      });
    }

    // Defer the reply to avoid timeout issues
    await interaction.deferReply();

    try {
      const prompt = interaction.options.getString("prompt");
      const ia = await chatIAService.initChat(prompt);

      const embeds = [];
      const chunkSize = 4096; // Discord message limit

      for (let i = 0; i < ia.length; i += chunkSize) {
        const embed = new EmbedBuilder()
          .setColor(3447003)
          .setTitle(i === 0 ? "Template IA" : null)
          .setDescription(ia.slice(i, i + chunkSize))
          .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
          .setTimestamp();

          embeds.push(embed);

      }
      // Edit the deferred reply with the result
      await interaction.editReply({ embeds });
    } catch (error) {
      console.error(error);
      await interaction.editReply({
        content: "❌ Ocurrió un error al procesar tu solicitud.",
      });
    }
  },
};
