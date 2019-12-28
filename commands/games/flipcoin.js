const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  let replies = ["**You landed on Heads**", "**You landed on Tails**"];

  let result = Math.floor(Math.random() * replies.length);
  let embed = new Discord.RichEmbed()
    .setColor("0000FF")
    .setTitle(replies[result])
    .setFooter(message.author.username, message.author.displayAvatarURL);
  message.channel.send(embed);
};

module.exports.help = {
  name: "flipcoin",
  aliases: "fcoin"
};
