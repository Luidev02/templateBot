import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import logger from "../utils/logger.util.js";

export default {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Muestra tu avatar o el de otro usuario")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("El usuario del cual quieres ver el avatar")
        .setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("usuario") || interaction.user;
    const avatarURL = user.displayAvatarURL({ dynamic: true, extension: 'png' });
    const embedUser = new EmbedBuilder()
      .setColor(3447003)
      .setTitle(`Avatar de ${user.tag}`)
      .setImage(avatarURL)
      .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Ver en tamaño completo")
        .setStyle(ButtonStyle.Link)
        .setURL(avatarURL)
    );

    await interaction.reply({ embeds: [embedUser], components: [row] });

    logger.info(
      `Avatar command executed by ${interaction.user.tag} in guild ${
        interaction.guild?.name || "DM"
      }`
    );
  },
};
