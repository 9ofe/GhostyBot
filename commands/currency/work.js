const Discord = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let user = message.author;

    let author = await db.fetch(`work_${message.guild.id}_${user.id}`);
    let bal = db.fetch(`money_${message.guild.id}_${user.id}`);
    if (bal === null) ball = 0;
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);
    if (bank === null) bank = 0;
    let bicon = message.author.displayAvatarURL;

    let timeout = 600000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      message.channel.send(
        `You have already worked! Please wait ${time.minutes} minutes before you can work again`
      );
    } else {
      let replies = require("../../modules/work.json");
      let nothing = "none";

      let result = Math.floor(Math.random() * replies.length);
      let amount = Math.floor(Math.random() * 80) + 1;

      let embed2 = new Discord.RichEmbed()
        .setColor("0000ff")
        .setTitle(`${replies[result]}`)
        .addField("Money Earned:", `${amount} Coins`)
        .setThumbnail(bicon)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
      message.channel.send(embed2);

      db.add(`money_${message.guild.id}_${user.id}`, amount);
      db.set(`work_${message.guild.id}_${user.id}`, Date.now());
    }
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
  name: "work"
};
