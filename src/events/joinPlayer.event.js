import cliente from "../config/Client.config.js";
import { EmbedBuilder } from "discord.js";

cliente.on("guildMemberAdd", async (member) => {
  try {
    // TODO: Reemplazar este ID por uno obtenido de una configuración
    const defaultWelcomeChannelId = "1150615183450968148";

    // Buscar el canal en la caché del servidor
    const channel = member.guild.channels.cache.get(defaultWelcomeChannelId);

    if (!channel || !channel.isTextBased()) {
      console.warn(`Canal de bienvenida no encontrado o no es de texto en ${member.guild.name}`);
      return;
    }


    const welcomeEmbed = new EmbedBuilder()
      .setColor(0x00ff00)
      .setTitle("🎉 ¡Nuevo miembro!")
      .setDescription(`Bienvenido al servidor, ${member} 👋`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setFooter({ text: `${member.user.tag} se unió`, iconURL: member.user.displayAvatarURL({ dynamic: true }) });

    await channel.send({ embeds: [welcomeEmbed] });

    console.log(`👤 Nuevo miembro: ${member.user.tag} en ${member.guild.name}`);
  } catch (error) {
    console.error("❌ Error en el evento guildMemberAdd:", error);
  }
});
