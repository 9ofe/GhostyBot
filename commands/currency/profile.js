const Discord = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let user = message.mentions.members.first() || message.author;

    let money = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if (money === null) money = 0;

    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);
    if (bank === null) bank = 0;
    let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`);
    if (vip === null) vip = "None";
    if (vip === true) vip = "Bronze";
    let nikes = await db.fetch(`nikes_${message.guild.id}_${user.id}`);
    if (nikes === null) nikes = "None";
    let computer = await db.fetch(`computer_${message.guild.id}_${user.id}`);
    if (computer === null) computer = "None";
    let desk = await db.fetch(`desk_${message.guild.id}_${user.id}`);
    if (desk === null) desk = "None";
    let guitar = await db.fetch(`guitar_${message.guild.id}_${user.id}`);
    if (guitar === null) guitar = "None";
    let iphone = await db.fetch(`iphone_${message.guild.id}_${user.id}`);
    if (iphone === null) iphone = "None";
    if (guitar === null) guitar = "None";
    let car = await db.fetch(`car_${message.guild.id}_${user.id}`);
    if (car === null) car = "None";
    let house = await db.fetch(`house_${message.guild.id}_${user.id}`);
    if (house === null) house = "None";
    let mansion = await db.fetch(`mansion_${message.guild.id}_${user.id}`);
    if (mansion === null) mansion = "None";
    const embed = new Discord.RichEmbed()
      .setColor("0000ff")
      .setTitle(`${user}'s Profile`)
      .setDescription(
        `**Total cash:** ${money}
**Total Bank balance:** ${bank}
**VIP:** ${vip}
**Nike shoes:** ${nikes}
**Computer:** ${computer}
**Guitar:** ${guitar}
**Ikea Desk:** ${desk}
**Iphone 11:** ${iphone}
**Car:** ${car}
**House:** ${house}
**Mansion:** ${mansion}
`
      )
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the profile command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "profile"
};
