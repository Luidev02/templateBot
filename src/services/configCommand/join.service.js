import { EmbedBuilder } from "discord.js";
import Config from "../../repositories/config.repository.js";

export default async function joinPlayerCommand(interaction, canal) {
  // Aquí podrías guardar el canal en una DB para usarlo luego
  const configDB = await Config.create({
    guildId: interaction.guild.id,
    channelId: canal.id,
  });

  return new EmbedBuilder()
    .setColor(0x00ff00)
    .setTitle("Canal de Bienvenida Configurado")
    .setDescription(`El canal de bienvenida se ha establecido en ${canal}`)
    .setFooter({ text: `Configurado por ${interaction.user.tag}` })
    .setTimestamp();
}
