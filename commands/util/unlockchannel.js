const Discord = require("discord.js");
const chalk = require('chalk')

module.exports.run = async (bot, message, args) => {
    try {
        message.delete().catch(O_o=>{});
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
        })
        message.channel.send(`Channel was successfully unlocked`)

    } catch(err) {
        console.log(
            chalk.red("Oops! Something went wrong with the slap command: "),
            err
          );
          message.reply(
            ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
          );
    }

}

module.exports.help = {
    name: "unlockchannel"
}