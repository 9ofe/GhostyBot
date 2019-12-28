const Discord = require("discord.js");
const chalk = require("chalk");
const { stripIndents } = require("common-tags");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  try {
    let member = message.mentions.members.first();
    if (!member)
      return message.channel.send("Please provide someone you want to punch.");
    let punches = [
      "https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif",
      "https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif",
      "https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif",
      "https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif",
      "https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif"
    ];

    const embed = new Discord.RichEmbed()
      .setTimestamp()
      .setColor(00250)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTitle(`${message.author.username} punched ${member.user.username}`)
      .setImage(punches[Math.floor(Math.random() * punches.length)]);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.channel.send("Sorry, I couldn't find that user.");
  }
};

module.exports.help = {
  name: "punch"
};
