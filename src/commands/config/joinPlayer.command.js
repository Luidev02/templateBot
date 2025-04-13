import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import logger from "../../utils/logger.util.js";

export default {
  data: new SlashCommandBuilder()
    .setName("config")
    .setDescription("Comando de configuración")
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("El comando que quieres ejecutar") // Ya no es obligatorio
    ),

  async execute(interaction) {
    const command = interaction.options.getString("command")?.toLowerCase(); // Maneja undefined
    let embed;

    switch (command) {
      case "ping":
        embed = new EmbedBuilder()
          .setColor(3447003)
          .setTitle("🏓 Ping")
          .setDescription(`El ping del bot es **${interaction.client.ws.ping}ms**`)
          .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
          .setTimestamp();
        break;

      case "join":
        embed = new EmbedBuilder()
          .setColor(3447003)
          .setTitle("🔗 Join")
          .setDescription("Aquí iría el link para invitar al bot o lógica relacionada.")
          .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
          .setTimestamp();
        break;

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
          .setDescription("Los comandos disponibles son:")
          .addFields(
            { name: "`ping`", value: "Devuelve el ping del bot" },
            { name: "`join`", value: "Invita al bot o muestra información de ingreso" },
            { name: "`leave`", value: "Lógica para que el bot se retire del servidor" }
          )
          .setFooter({ text: `Request made by >>${interaction.user.tag}<<` })
          .setTimestamp();
        break;
    }

    await interaction.reply({ embeds: [embed] });

    logger.info(
      `Config command "${command || "list"}" executed by ${interaction.user.tag} in guild ${
        interaction.guild?.name || "DM"
      }`
    );
  },
};
