import { EmbedBuilder, SlashCommandBuilder, ChannelType } from "discord.js";
import logger from "../../utils/logger.util.js";

export default {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Envía un mensaje a un canal específico")
    .addChannelOption(option =>
      option
        .setName("canal")
        .setDescription("Canal al que se enviará el mensaje")
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildText)
    )
    .addStringOption(option =>
      option
        .setName("mensaje")
        .setDescription("El mensaje que deseas enviar")
        .setRequired(true)
    ),
  async execute(interaction) {
    try {
      const channel = interaction.options.getChannel("canal"); // Canal al que se enviará el mensaje
      const message = interaction.options.getString("mensaje"); // Mensaje a enviar

      // Verifica si el canal es un canal de texto
      if (channel.type !== ChannelType.GuildText) {
        await interaction.reply({
          content: "El canal seleccionado no es un canal de texto.",
          ephemeral: true,
        });
        return;
      }

      // Crear el embed
      const embed = new EmbedBuilder()
        .setColor("#0099ff")
        .setTitle("Mensaje del Bot")
        .setDescription(message)
        .setTimestamp()
        .setFooter({ text: "Enviado por el bot" });

      // Enviar el mensaje al canal
      await channel.send({ embeds: [embed] });
      await interaction.reply({
        content: "Mensaje enviado correctamente.",
        flags: 64, // Usar flags en lugar de `ephemeral`
      });

      logger.info(
        `Mensaje enviado por ${interaction.user.tag} en el canal ${channel.name}: ${message}`
      );
    } catch (error) {
      logger.error(
        `Error al ejecutar el comando say por ${interaction.user.tag} en el servidor ${interaction.guild?.name || "DM"}`
      );
      console.error(error);

      await interaction.reply({
        content: "Ocurrió un error al intentar enviar el mensaje.",
        ephemeral: true,
      });
    }
  },
};
