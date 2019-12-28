const { get } = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    const { body } = await get("https://randomfox.ca/floof/");
    await message.channel.send({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": body.link,
        "color": 00255,
        "image": {
          "url": body.image
        }
      }
    });
    console.log(`${message.author.username} used the fox command`)      
  }

  module.exports.help = {
    name:"fox",
    cooldown: 10,
  }
