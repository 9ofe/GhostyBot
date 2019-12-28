const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let member = message.mentions.members.first();
    let tickle = await bot.nekoslife.sfw.tickle();
    if (!member)
      return message.reply("Please mention the user you want to tickle.");

    let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} tickles ${member.user.username}`)
      .setImage(tickle.url)
      .setColor("0000FF")
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the randomnumber command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "tickle"
};
