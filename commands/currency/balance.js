const Discord = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let user = message.mentions.members.first() || message.author;
    let bal = db.fetch(`money_${message.guild.id}_${user.id}`);
    if (bal === null) ball = 0;
    let bank = db.fetch(`bank_${message.guild.id}_${user.id}`);
    if (bank === null) bank = 0;
    let bicon = user.displayAvatarURL;

    let embed2 = new Discord.RichEmbed()
      .setColor("0000ff")
      .setTitle(`${user}'s Balance`)
      .addField("Cash:", `${bal}`)
      .addField("Bank:", `${bank}`)
      .setThumbnail(bicon)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp();
    message.channel.send(embed2);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the work command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "balance"
};
