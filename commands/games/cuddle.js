const Discord = require("discord.js");
const chalk = require("chalk");
const { stripIndents } = require("common-tags");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  try {
    let options = {
      url: "http://api.giphy.com/v1/gifs/search",
      qs: {
        q: "cuddle",
        api_key: "dc6zaTOxFJmzC",
        limit: 10,
        offset: 0
      },
      json: true
    };

    let response = await request(options);
    console.log(response);
    await message.channel.send({
      embed: {
        color: 00250,
        title: `${message.author.tag} is cuddling you.`,
        image: {
          url:
            response.data[Math.floor(Math.random() * response.data.length)]
              .images.original.url
        },
        footer: {
          text: "Powered by GIPHY"
        }
      }
    });
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.channel.send("Sorry, I couldn't find that user.");
  }
};

module.exports.help = {
  name: "cuddle"
};
