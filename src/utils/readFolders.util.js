import fs from "fs";
import { Collection } from "discord.js";
import cliente from "../config/Client.config.js";

export const commandsFolder = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));
export const moderatorFolder = fs
  .readdirSync("./src/commands/moderator")
  .filter((file) => file.endsWith(".js"));
export const iaFolder = fs
  .readdirSync("./src/commands/ia")
  .filter((file) => file.endsWith(".js"));
export const configFolder = fs
  .readdirSync("./src/commands/config")
  .filter((file) => file.endsWith(".js"));

cliente.commands = new Collection();

export async function loadCommands() {
  for (const file of commandsFolder) {
    const command = await import(`../commands/${file}`);
    if ("data" in command.default && "execute" in command.default) {
      cliente.commands.set(command.default.data.name, command.default);
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" or "execute" property.`
      );
    }
  }

  for (const file of moderatorFolder) {
    const command = await import(`../commands/moderator/${file}`);
    if ("data" in command.default && "execute" in command.default) {
      cliente.commands.set(command.default.data.name, command.default);
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" or "execute" property.`
      );
    }
  }

  for (const file of iaFolder) {
    const command = await import(`../commands/ia/${file}`);
    if ("data" in command.default && "execute" in command.default) {
      cliente.commands.set(command.default.data.name, command.default);
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" or "execute" property.`
      );
    }
  }

  for (const file of configFolder) {
    const command = await import(`../commands/config/${file}`);
    if ("data" in command.default && "execute" in command.default) {
      cliente.commands.set(command.default.data.name, command.default);
    } else {
      console.log(
        `[WARNING] The command at ${file} is missing a required "data" or "execute" property.`
      );
    }
  }
}
