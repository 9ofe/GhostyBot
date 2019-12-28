const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let member = message.mentions.members.first();
    if (!member)
      return message.channel.send(
        "You need to mention a user you want to poke."
      );
    let poke = await bot.nekoslife.sfw.poke();
    const embed = new Discord.RichEmbed()
      .setColor("0000FF")
      .setTitle(`${message.author.username} poked ${member}`)
      .setTimestamp()
      .setImage(poke.url)
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
  name: "poke"
};
