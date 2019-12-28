const Discord = require("discord.js");
const chalk = require('chalk')

module.exports.run = async (bot, message, args) => {
    try {
        message.delete().catch(O_o=>{});
        let lockReason = args.join(" ")
        if(!lockReason) return message.channel.send("Please supply a reason to lock the channel.")
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        message.channel.send(`Channel was successfully locked, Reason: **${lockReason}**`)

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
    name: "lockchannel"
}