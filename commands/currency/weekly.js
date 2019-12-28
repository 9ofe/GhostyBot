const Discord = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let user = message.author;
    let timeout = 604800000;
    let amount = 500;

    let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
      let time = ms(timeout - (Date.now() - weekly));
      message.channel.send(
        `You have already claimed your weekly! Please wait ${time.days} Days, ${time.hours}:${time.minutes}hours before you can claim your weekly again`
      );
    } else {
      let bicon = message.author.displayAvatarURL;

      let embed2 = new Discord.RichEmbed()
        .setColor("0000ff")
        .setTitle(`Congrats ${user.username}!`)
        .setDescription(`You have claimed your weekly of ${amount} coins!`)
        .setThumbnail(bicon)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
      message.channel.send(embed2);
      db.add(`money_${message.guild.id}_${user.id}`, amount);
      db.set(`weekly_${message.guild.id}_${user.id}`, Date.now());
    }
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the weekly command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "weekly"
};
