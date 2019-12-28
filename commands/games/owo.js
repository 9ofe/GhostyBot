const { get } = require("snekfetch");

module.exports.run = async (bot, message, args, cmd) => {
    message.delete().catch(O_o=>{});
    const { body } = await get("https://rra.ram.moe/i/r?type=owo");
    await message.channel.send({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": `https://cdn.ram.moe/${body.path.replace('/i/', '')}`,
        "color": 00255,
        "image": {
          "url": `https://cdn.ram.moe/${body.path.replace('/i/', '')}`
        }
      }
    });   
  }

  module.exports.help = {
    name:"owo",
  }