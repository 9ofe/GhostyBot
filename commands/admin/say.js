const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  if (!args[0])
    return message.channel.send(
      ":warning: Please send the message you want the bot to say."
    );
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Sorry, I don't have permissions for that.");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
};

module.exports.help = {
  name: "say"
};
