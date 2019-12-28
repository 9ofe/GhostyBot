const Discord = require("discord.js");
const { get } = require('snekfetch');
const chalk = require("chalk")

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});

  try {
    const { text } = await get('http://api.yomomma.info/');
    message.channel.send(`_${JSON.parse(text).joke}_`)
      } catch (err) {
          console.log(chalk.red("Oops! Something went wrong with the reload command: "), err)
          message.reply(      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
          )
  }

}
exports.help = {
  name: "yomama"
};
