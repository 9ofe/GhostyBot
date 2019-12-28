const Discord = require("discord.js");
const chalk = require('chalk')

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    message.delete().catch(O_o=>{});
    const { get } = require('superagent')
    // "url": `https://tenor.com/4Bne.gif`,
    const { body } = await get(`https://tenor.com/view/traffic-fbiopen-up-raid-gif-13450966`);
        await message.channel.send({
            embed: {
                "title": "Click here if the image failed to load.",
                    "url": `https://media1.tenor.com/images/f3dede91db5fd6cd46e80f543ef1b7bf/tenor.gif?itemid=13450966`,
                "color": 00255,
                "image": {
                    "url": `https://media1.tenor.com/images/f3dede91db5fd6cd46e80f543ef1b7bf/tenor.gif?itemid=13450966`
                }
            }
        })

  } catch(err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "fbi"
};
