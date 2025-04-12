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

      if (!keywords.some(keyword => highestRole.name.includes(keyword))) {
        await interaction.reply({
          content: "No tienes permisos para usar este comando.",
        });
        return;
      }

      const user = interaction.options.getUser("usuario");

      // finalizar el proceso de baneo
      interaction.reply({
        content: "Enviando mensaje..."+user+"baneo",
        ephemeral: true,
      });

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
