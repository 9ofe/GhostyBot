const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  let replies = ["Rock", "Paper", "scissors"];

  let result = Math.floor(Math.random() * replies.length);
  let ballembed = new Discord.RichEmbed()
    .setColor("#0000FF")
    // .addField("Question", question)
    .setTitle(replies[result])
    .setFooter(message.author.username, message.author.displayAvatarURL);
  message.channel.send(ballembed);
};

module.exports.help = {
  name: "rps"
};
