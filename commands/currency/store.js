const Discord = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let user = message.author;
    let embed2 = new Discord.RichEmbed()
      .setColor("0000ff")
      .setTitle(`${message.guild.name}'s Store`)
      .setDescription(
        `Available items:
**Brozne VIP:** 2000 Coins, r?buy bronze
**Nike Shoes:** 400, r?buy nikes
**Amazing Guitar:** 600, r?buy guitar
**Balling Computer:** 1200, r?buy computer
**Ikea desk:** 230, r?buy desk
**Iphone 11:** 450, r?buy iphone
**AWESOME Car:** 7500, r?buy car
**Nice House:** 10000, r?buy house
**Amazing huge Mansion:** 20000, r?buy mansion`
      )
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed2);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the store command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "store"
};
