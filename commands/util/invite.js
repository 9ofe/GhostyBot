const Discord = require("discord.js");
const chalk = require("chalk");
exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  try {
    if (message.member.hasPermission("CREATE_INSTANT_INVITE")) {
      message.channel
        .createInvite()
        .then(invite =>
          message.channel.send(
            `I've succesfuly created the invite!\nCode: https://discordapp.com/invite/${invite.code}`
          )
        );
    } else message.reply("You don't have the Create Invite permission!");
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
  name: "invite",
  category: "General",
  description: "Creates an invite for the current channel.",
  usage: "invite"
};
