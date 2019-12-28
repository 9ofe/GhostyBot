const Discord = require("discord.js");
// const { get } = require('snekfetch')
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    message.delete().catch(O_o => {});
    const { get } = require("superagent");
    const text = args.join(" ");
    if (!text)
      return message.channel.send(
        "Please add the text you want to say. E.G. **r?clyde Hey there!**"
      );
    const { body } = await get(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
    );
    await message.channel.send({
      embed: {
        title: "Click here if the image failed to load.",
        url: body.message,
        color: 00255,
        image: {
          url: body.message
        },
        footer: message.author.username + message.author.displayAvatarURL
      }
    });
  } catch (err) {
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
  name: "clyde"
};
