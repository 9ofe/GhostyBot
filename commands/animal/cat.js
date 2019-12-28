const config = require("../../config.json");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-var
  message.delete().catch(O_o => {});
  const { get } = require("superagent");
  const { body } = await get("https://nekos.life/api/v2/img/meow");
  await message.channel.send({
    embed: {
      title: "Click here if the image failed to load.",
      url: body.url,
      color: 00255,
      image: {
        url: body.url
      }
    }
  });
  console.log(`${message.author.username} used the cat command`);
};

// exports.conf = {
//     enabled: true,

//     guildOnly: true,
//     aliases: [],
//     permLevel: "User"
// };

exports.help = {
  name: "cat",
  category: "Fun",
  description: "Post a random image of a cat",
  usage: "cat",
  cooldown: 10
};
