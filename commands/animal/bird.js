const { get } = require("snekfetch");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.delete().catch(O_o=>{});
    const { body } = await get("http://random.birb.pw/tweet/");
    return message.channel.send({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": `https://random.birb.pw/img/${body}`,
        "color": 00255,
        "image": {
          "url": `https://random.birb.pw/img/${body}`
        }
      }
    });
    console.log(`${message.author.username} used the bird command`)      
}

  module.exports.help = {
    name:"bird",
    cooldown: 10,
  }