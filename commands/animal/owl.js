const Discord = require("discord.js");
const { get } = require("snekfetch");
const chalk = require("chalk");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    const url = `http://pics.floofybot.moe/owl`;
    const result = await fetch(url).then(url => url.json());
    const embed = new Discord.RichEmbed()
      .setURL(result.image)
      .setTitle(`Click here if the images failed to load`)
      .setColor(00250)
      .setImage(result.image);
    await message.channel.send(embed);
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
  name: "owl"
};
