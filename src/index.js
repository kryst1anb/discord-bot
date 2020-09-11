const Discord = require("discord.js");
const commandHandler = require("./commands");
const client = new Discord.Client();

require("dotenv").config();

client.once("ready", () => {
  console.log("Bot is ready to hard party");
});

client.on("message", commandHandler);

client.login(process.env.BOT_TOKEN);
