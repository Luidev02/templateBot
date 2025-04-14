import { SlashCommandBuilder, ChannelType, EmbedBuilder } from "discord.js";
import logger from "../../utils/logger.util.js";
import joinPlayerCommand from "../../services/configCommand/join.service.js";

export default {
  data: new SlashCommandBuilder()
    .setName("config")
    .setDescription("Comando de configuración")
    .addSubcommand((sub) =>
      sub
        .setName("ping")
        .setDescription("Ver el ping del bot")
    )
    .addSubcommand((sub) =>
      sub
        .setName("join")
        .setDescription("Configurar el canal de bienvenida")
        .addChannelOption((option) =>
          option
            .setName("canal")
            .setDescription("Canal donde se enviará el mensaje de bienvenida")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText) // solo canales de texto
        )
    )
    .addSubcommand((sub) =>
      sub
        .setName("leave")
        .setDescription("Hacer que el bot deje el servidor (opcional)")
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    let embed;

    switch (subcommand) {
      case "ping":
        embed = new EmbedBuilder()
          .setColor(3447003)
          .setTitle("🏓 Ping")
          .setDescription(`El ping del bot es **${interaction.client.ws.ping}ms**`)
          .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
          .setTimestamp();
        break;

      case "join": {
        const canal = interaction.options.getChannel("canal");
        embed = await joinPlayerCommand(interaction, canal);
        break;
      }

      case "leave":
        embed = new EmbedBuilder()
          .setColor(3447003)
          .setTitle("👋 Leave")
          .setDescription("Aquí iría la lógica para que el bot salga del servidor (si aplica).")
          .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
          .setTimestamp();
        break;

      default:
        embed = new EmbedBuilder()
          .setColor(3447003)
          .setTitle("⚙️ Comandos de Configuración")
          .setDescription("Usa uno de los subcomandos disponibles.")
          .setTimestamp();
        break;
    }

    await interaction.reply({ embeds: [embed] });

    logger.info(
      `Subcommand "${subcommand}" executed by ${interaction.user.tag} in guild ${
        interaction.guild?.name || "DM"
      }`
    );
  },
};
