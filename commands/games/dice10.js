const Discord = require("discord.js");

exports.run = function(bot, message) {
  try {
    message.delete().catch(O_o => {});
    var DiceRoll = Math.floor(Math.random() * 10) + 1;
    message.channel
      .sendEmbed(
        new Discord.RichEmbed()
          .setColor(message.guild.me.displayHexColor)
          .setTitle("🎲 You landed on: " + DiceRoll)
      )
      .setFooter(message.author.username, message.author.displayAvatarURL);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the afk command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

exports.help = {
  name: "dice10"
};
