const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
      .setColor("#0000FF")
      .setThumbnail(bicon)
      .setTitle(bot.user.username + " Is Online ")
      .setDescription("test Worked Fine!")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(botembed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the test command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "test"
};
