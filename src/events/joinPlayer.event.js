import cliente from "../config/Client.config.js";
cliente.addListener("guildMemberAdd", async (member) => {
    // TODO: agregar el mensaje de bienvenida al canal pero tambien cuandos e conecte a la base datos dependiendo guarde el canal aparte permita configurar el canal de bienvenida desde un comando
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to the server, ${member}!`);
})