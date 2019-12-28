const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    message.delete().catch(O_o => {});
    const { body } = await get("https://animals.anidiots.guide/lion");
    await message.channel.send({
        embed: {
            "title": "Click here if the image failed to load.",
            "url": body.link,
            "color": 00255,
            "image": {
                "url": body.link
            }
        }
    });
    console.log(`${message.author.username} used the lion command`)      
}


module.exports.help = {
    name: "lion"
}