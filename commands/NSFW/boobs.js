const Discord = require("discord.js");
const chalk = require('chalk')
const { get } = require('snekfetch');

module.exports.run = async (bot, message, args) => {
    try {
        message.delete().catch(O_o=>{});
        if(!message.channel.nsfw) return  message.reply('This channel is not a NSFW channel!')
        const { body } = await get('http://api.oboobs.ru/boobs/0/1/random');
        await message.channel.send({
            embed: {
                "title": "Click here if the image failed to load.",
                "url": `http://media.oboobs.ru/${body[0].preview}`,
                "color": 00255,
                "image": {
                    "url": `http://media.oboobs.ru/${body[0].preview}`
                }
            }
        })   

    } catch(err) {
        console.log(
            chalk.red("Oops! Something went wrong with the boobs command: "),
            err
          );
          message.reply(
            ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
          );
    }

}

module.exports.help = {
    name: "boobs"
}