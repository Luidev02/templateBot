import { Events } from "discord.js";
import cliente from "../config/Client.config.js";
import logger from "../utils/logger.util.js";

cliente.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        logger.error(`Error al ejecutar el comando ${interaction.commandName} por ${interaction.user.tag} en el servidor ${interaction.guild.name}`);
        if (interaction.replied || interaction.deferred) {
            await interaction.editReply({ content: 'Hubo un error al ejecutar este comando!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'Hubo un error al ejecutar este comando!', ephemeral: true });
        }
    }
});