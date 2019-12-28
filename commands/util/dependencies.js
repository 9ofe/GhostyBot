const Discord = require("discord.js");
const { get } = require("snekfetch");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    let embed = new Discord.RichEmbed()
      .setTitle(` ${bot.user.username}'s dependenciese:`)
      .setColor("0000FF")
      .setDescription(
        `${Object.keys(require("../../package").dependencies).join(`,\n`)}`
      )
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the dependencies command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "dependencies"
};
