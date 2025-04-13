import { EmbedBuilder, SlashCommandBuilder, ChannelType } from "discord.js";
import logger from "../../utils/logger.util.js";

export default {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Expulsa a un usuario del servidor")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("El usuario al que deseas expulsar")
        .setRequired(false)
    ),
  async execute(interaction) {
    try {
      const memberin = interaction.member;
      const highestRole = memberin.roles.highest;

      // Mejoras el codigo :D
      const keywords = ["mod", "io"];

      if (!keywords.some((keyword) => highestRole.name.includes(keyword))) {
        await interaction.reply({
          content: "No tienes permisos para usar este comando.",
        });
        return;
      }

      const user = interaction.options.getUser("usuario");

      const member = interaction.guild.members.cache.get(user.id);
      if (!member) {
        await interaction.reply({
          content: "El usuario no está en el servidor.",
          ephemeral: true,
        });
        return;
      }
      if (member.id === interaction.user.id) {
        await interaction.reply({
          content: "No puedes expulsarte a ti mismo.",
          ephemeral: true,
        });
        return;
      }

      if (member.id === interaction.client.user.id) {
        await interaction.reply({
          content: "No puedes expulsar al bot.",
          ephemeral: true,
        });
        return;
      }

      // Expulsar al usuario
      await member.kick("Expulsado por el comando /kick");
      await interaction.reply({
        content: `El usuario ${user.tag} ha sido expulsado del servidor.`,
        ephemeral: true,
      });
      logger.info(
        `El usuario ${user.tag} ha sido expulsado por ${
          interaction.user.tag
        } en el servidor ${interaction.guild?.name || "DM"}`
      );
    } catch (error) {
      logger.error(
        `Error al ejecutar el comando say por ${
          interaction.user.tag
        } en el servidor ${interaction.guild?.name || "DM"}`
      );
      console.error(error);

      await interaction.reply({
        content: "Ocurrió un error al intentar enviar el mensaje.",
        ephemeral: true,
      });
    }
  },
};
