const Discord = require("discord.js");
const chalk = require("chalk");
const wd = require("word-definition");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    for (let i = 0; i < args.length - 1; i++) {
      args[i] = args[i].toLowerCase();
    }
    let lang = args[0];
    if (!/^(en|fr|de)$/.test(lang)) {
      lang = "en";
      args = args.join(" ");
    } else {
      args = args.slice(1).join(" ");
    }
    await wd.getDef(args, lang, null, async data => {
      let embed = {};
      if (data.err) {
        embed = {
          embed: {
            color: "00250",
            description: `No definition found for **${data.word}**`,
            footer: message.author.username + message.author.displayAvatarURL
          }
        };
      } else {
        embed = {
          embed: {
            color: "00250",
            title: data.word,
            description: `*${data.category}*\n\n${data.definition}`,
            footer: message.author.username + message.author.displayAvatarURL
          }
        };
      }

      await message.channel.send(embed);
    });
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.channel.send(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "define"
};
