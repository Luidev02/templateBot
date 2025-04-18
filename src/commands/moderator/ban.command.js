import { EmbedBuilder, SlashCommandBuilder, ChannelType } from "discord.js";
import logger from "../../utils/logger.util.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Envía un mensaje a un canal específico")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("El usuario del cual quieres ver el avatar")
        .setRequired(false)
    ),
  async execute(interaction) {
    try {
      const member = interaction.member;
      const highestRole = member.roles.highest;

      // todo: Implementar un sistema para almacenar la configuracion de los roles que asgino el confi del bot
      const keywords = ["mod", "io"];

      if (!keywords.some((keyword) => highestRole.name.includes(keyword))) {
        await interaction.reply({
          content: "No tienes permisos para usar este comando.",
        });
        return;
      }

      const user = interaction.options.getUser("usuario");
      const cacheMember = interaction.guild.members.cache.get(user.id);

      if (!cacheMember) {
        await interaction.reply({
          content: "El usuario no está en el servidor.",
          ephemeral: true,
        });
        return;
      }
      if (cacheMember.id === interaction.user.id) {
        await interaction.reply({
          content: "No puedes banearte a ti mismo.",
          ephemeral: true,
        });
        return;
      }

      await cacheMember.ban({ reason: "Baneado por el comando /ban" });
      await interaction.reply({
        content: `El usuario ${user.tag} ha sido baneado del servidor.`,
        ephemeral: true,
      });
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
