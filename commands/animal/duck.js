const {
    get
} = require("snekfetch");


module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    const {
        body
    } = await get("https://random-d.uk/api/v1/random?type=gif");
    return message.channel.send({
        embed: {
            "title": "Click here if the image failed to load.",
            "url": body.url,
            "color": 00255,
            "image": {
                "url": body.url
            }
        }
    });
    console.log(`${message.author.username} used the duck command`)      
}



module.exports.help = {
    name: "duck",
    cooldown: 10,
}