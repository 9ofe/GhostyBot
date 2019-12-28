const Discord = require("discord.js");
const replies = require("../../modules/WouldYouRather.json");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  let result = Math.floor(Math.random() * replies.length);
  let question = args.join(" ");
  let ballembed = new Discord.RichEmbed()
    .setColor("#0000FF")
    .setTimestamp()
    .setTitle(replies[result])
    .setFooter(message.author.username, message.author.displayAvatarURL);

  message.channel.send(ballembed);
};

module.exports.help = {
  name: "wyr"
};
