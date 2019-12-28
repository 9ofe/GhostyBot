const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== config.ownerID) {
    message.reply("Only owner is able to use this command!");
    return;
  }

  // try {
  bot.guilds.forEach(async (guild, message) => {
    bot.channels
      .get("646695061458911243")
      .send(
        " - " + guild.name + ", " + guild.memberCount + ", " + guild.region
      );
  });
};

module.exports.help = {
  name: "servers"
};
