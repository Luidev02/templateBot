import { Client, GatewayIntentBits } from "discord.js";

const cliente = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers]
})




export default cliente;