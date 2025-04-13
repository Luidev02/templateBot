import { REST, Routes } from "discord.js";
import { commandsFolder, moderatorFolder ,iaFolder} from "../utils/readFolders.util.js";
import config from "./variables.config.js";

async function deployCommands() {
  const commands = [];

  for (const file of commandsFolder) {
    console.log("Ruta", file);
    const command = await import(`../commands/${file}`);
    if ("data" in command.default) {
      commands.push(command.default.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" property.`
      );
    }
  }

  // commands/moderator
  for (const file of moderatorFolder) {
    console.log("Ruta", file);
    const command = await import(`../commands/moderator/${file}`);
    if ("data" in command.default) {
      commands.push(command.default.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" property.`
      );
    }
  }

  //commands/ia
  for (const file of iaFolder) {
    console.log("Ruta", file);
    const command = await import(`../commands/ia/${file}`);
    if ("data" in command.default) {
      commands.push(command.default.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" property.`
      );
    }
  }

  const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(config.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

deployCommands();
