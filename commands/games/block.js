const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    let blocks = args
      .join(" ")
      .toLowerCase()
      .replace(/[a-z]/g, ":regional_indicator_$&:")
      .replace(/1/g, ":one:")
      .replace(/2/g, ":two:")
      .replace(/3/g, ":three:")
      .replace(/4/g, ":four:")
      .replace(/5/g, ":five:")
      .replace(/6/g, ":six:")
      .replace(/7/g, ":seven:")
      .replace(/8/g, ":eight:")
      .replace(/9/g, ":nine:")
      .replace(/0/g, ":zero:");

    const embed = new Discord.RichEmbed()
      .setTitle("Block Text")
      .setTimestamp()
      .setDescription(blocks)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setColor(00250);

    await message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the blocks command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "block"
};
