const Discord = require("discord.js");
const { get } = require("snekfetch");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    let notAnimated = [];
    let animated = [];

    message.guild.emojis.forEach(async emoji => {
      if (emoji.animated) animated.push(emoji.toString());
      else notAnimated.push(emoji.toString());
    });
    if (!animated[0]) animated = ["None"];
    if (!notAnimated[0]) notAnimated = ["None"];

    const embde = new Discord.RichEmbed()
      .setTitle("Server Emojis")
      .addField("Animated:", animated.join(" "))
      .addField("Not Animated:", notAnimated.join(" "))
      .setTimestamp()
      .setColor("0000FF")
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embde);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the boobs command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "emoji"
};
