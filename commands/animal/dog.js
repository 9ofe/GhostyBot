const { get } = require('superagent');

exports.run = async(client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.delete().catch(O_o => {});
    // const { body } = await get("https://dog.ceo/api/breeds/image/random");
    const { body } = await get(args[0] ? `https://dog.ceo/api/breed/${args[0]}/images/random` : "https://dog.ceo/api/breeds/image/random");
    await message.channel.send({
        embed: {
            "title": "Click here if the image failed to load.",
            "url": body.message,
            "color": 00255,
            "image": {
                "url": body.message
            }
        }
    })
    console.log(`${message.author.username} used the dog command`)      

}


module.exports.help = {
    name: "dog"
};