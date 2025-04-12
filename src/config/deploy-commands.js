
import { REST, Routes } from 'discord.js';
import { commandsFolder } from '../utils/readFolders.util.js';
import config from './variables.config.js';

async function deployCommands() {
    const commands = [];

    for (const file of commandsFolder) {
        console.log("aqui =>",file)
        const command = await import(`../commands/${file}`);
        if ('data' in command.default) {
            commands.push(command.default.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${file} is missing a required "data" property.`);
        }
    }

    const rest = new REST({ version: '10' }).setToken(config.DISCORD_TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(config.CLIENT_ID), 
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

deployCommands();