const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    let member = message.mentions.members.first();
    let slap = await bot.nekoslife.sfw.slap();
    if (!member)
      return message.reply("Please mention the user you want to slap.");

    let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} slapped ${member.user.username}`)
      .setImage(slap.url)
      .setColor("0000FF")
      .setTimestamp()
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
  name: "slap"
};
