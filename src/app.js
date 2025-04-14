import { Events } from "discord.js";
import cliente from "./config/Client.config.js";
import { loadCommands } from "./utils/readFolders.util.js";
import config from "./config/variables.config.js";
import configDB from "./config/syncDB.config.js";

// Cargar los eventos tanto internos como externos
import './events/joinPlayer.event.js';
import './events/interaction.event.js'

// Configurar el estado del bot


await loadCommands(); // Carga los comandos antes de que el bot esté listo
configDB.init(); // Inicializa la conexión a la base de datos
configDB.sync(); // Sincroniza la base de datos


cliente.once(Events.ClientReady, (readyBot) => {
  // cambiar el setPresence con algo más dinámico tipo estuviera jugando al visual studio code muestre como si estuviera jugando al juego con la imagen del js , visual studio code, editing app.js, workspace: templateBOT

  readyBot.user.setPresence({
    activities: [
      {
        name: "con el código",
        type: 0,
      },
    ],
    status: "online",
  });
  console.log(`Listo! ${readyBot.user.tag}`);
});

cliente.login(config.DISCORD_TOKEN);
