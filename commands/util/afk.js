const Discord = require("discord.js");
const chalk = require("chalk");

exports.run = async function(bot, message, args) {
  try {
    message.delete().catch(O_o => {});
    if (!message.guild.usersAFK) message.guild.usersAFK = [];
    if (message.guild.usersAFK.includes(message.author.id)) return;

    message.guild.usersAFK.push(message.author.id);

    await message.channel.send({
      embed: {
        color: "00250",
        description: `${message.author} I've set you as AFK. If anyone mentions you while you're away, I'll let them know. AFK mode will be disabled once you're back and send a message anywhere.`,
        footer: `${message.author.username + message.author.displayAvatarURL}`
      }
    });
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the afk command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

exports.help = {
  name: "afk"
};
