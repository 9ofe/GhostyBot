const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    let channel = message.mentions.channels.first();
    if (!channel) {
      channel = message.channel;
    }
    if (!channel.permissionsFor(message.member).has("MANAGE_CHANNELS")) {
      return message.channel.send(
        "Invalid permissions, You need **Manage channel** permissions."
      );
    }
    if (!channel.permissionsFor(message.guild.me).has("MANAGE_CHANNELS")) {
      return message.channel.send(
        "Invalid permissions, I need **Administrator** permissions."
      );
    }
    message.delete().catch(O_o => {});
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    });
    message.channel.send(`Channel was successfully unlocked`);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the slap command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "unlockchannel"
};
