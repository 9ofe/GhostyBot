const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    message.delete().catch(O_o => {});
    const { body } = await get("https://nekos.life/api/v2/img/lizard");
    await message.channel.send({
        embed: {
            "title": "Click here if the image failed to load.",
            "url": body.url,
            "color": 00255,
            "image": {
                "url": body.url
            }
        }
    });
    console.log(`${message.author.username} used the lizard command in ` + message.guild.name)      
}


module.exports.help = {
    name: "lizard"
}