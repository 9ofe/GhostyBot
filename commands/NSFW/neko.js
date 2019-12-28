const Discord = require("discord.js");
const { get } = require('snekfetch');
const chalk = require('chalk')

module.exports.run = async (bot, message, args) => {
    try {
        message.delete().catch(O_o=>{});
        if(!message.channel.nsfw) return  message.reply('This channel is not a NSFW channel!')
        const { body } = await get('https://nekobot.xyz/api/image?type=neko');
        await message.channel.send({
            embed: {
                "title": "Click here if the image failed to load.",
                "url": `${body.message}`,
                "color": 00255,
                "image": {
                    "url": `${body.message}`
                }
            }
        })

    } catch(err) {
        console.log(
            chalk.red("Oops! Something went wrong with the neko command: "),
            err
          );
          message.reply(
            ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
          );
    }

}

module.exports.help = {
    name: "neko"
}