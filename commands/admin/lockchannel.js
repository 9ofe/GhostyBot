const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    let channel = message.mentions.channels.first();
    if (!channel) {
      channel = message.channel;
    }
    const reason = args.join(" ");
    if (!channel.permissionsFor(message.member).has("MANAGE_CHANNELS")) {
      return message.channel.send(
        "Invalid permissions, I need Administrator permissions."
      );
    }
    if (!channel.permissionsFor(message.guild.me).has("MANAGE_CHANNELS")) {
      return message.channel.send("Invalid permissions");
    }

    message.delete().catch(O_o => {});
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.channel.send(`Channel was successfully locked for ${reason}`);
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
  name: "lockchannel"
};
