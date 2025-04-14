import { Client, GatewayIntentBits } from "discord.js";

const cliente = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,]
})




export default cliente;