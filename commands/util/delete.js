const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You don't have perms to do that!.");
  if (!args[0]) return message.channel.send("That's not a valid number");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`Deleted ${args[0]} messages.`)
      .then(msg => msg.delete(2000));
  });
};

module.exports.help = {
  name: "delete"
};
