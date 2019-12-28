const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let member = message.mentions.members.first();
    let bicon = message.author.displayAvatarURL;
    const embed = new Discord.RichEmbed()
      .setColor("0000FF")
      .setTitle(
        `${message.author.username} is ${Math.floor(
          Math.random() * 100 + 1
        )}% in love with ${member.user.username}`
      )
      .setTimestamp()
      .setThumbnail(bicon)
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the slap command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "love"
};
