const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = (bot, message, args) => {
  message.delete().catch(O_o => {});
  let bicon = bot.user.displayAvatarURL;
  let member =
    message.mentions.users.first() || bot.users.get(args[0]) || message.author;
  let avatar = member.displayAvatarURL;
  if (avatar.endsWith(".gif")) {
    avatar = `${member.displayAvatarURL}?size=2048`;
  }

  let botembed = new Discord.RichEmbed()
    .setAuthor(`${member.tag} Avatar`)
    .setDescription(`Click __[Here](${avatar})__ to download`)
    .setImage(avatar)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor("#0000ff");
  message.channel.send(botembed);
};

module.exports.help = {
  name: "avatar"
};
