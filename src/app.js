import { Events } from "discord.js";
import cliente from "./config/Client.config.js";
import { loadCommands } from "./utils/readFolders.util.js";
import config from "./config/variables.config.js";
import './events/interaction.events.js'

await loadCommands(); // Carga los comandos antes de que el bot esté listo

cliente.once(Events.ClientReady, (readyBot) => {
  console.log(`Listo! ${readyBot.user.tag}`);
});

cliente.login(config.DISCORD_TOKEN);
