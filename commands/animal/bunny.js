const { get } = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    const { body } = await get("https://api.bunnies.io/v2/loop/random/?media=gif,png");
    await message.channel.send({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": body.media.gif,
        "color": 00255,
        "image": {
          "url": body.media.gif
        }
      }
    });
    console.log(`${message.author.username} used the bunny command`)      
  }

  module.exports.help = {
    name:"bunny",
    cooldown: 10,
  }