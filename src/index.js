const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

const guildID = "738000897820459029";
const channelID = "753700932058873866";

client.once("ready", () => {
  console.log("Ready");
});

client.on("message", async (msg) => {
  console.log(msg);

  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    if (msg.content.toLowerCase() === "heybot") {
      await msg.channel.send("Bot said hey");
      console.log("Było gadane");
    }
  }
});

client.login(process.env.BOT_TOKEN);
