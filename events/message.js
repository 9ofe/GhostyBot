const { prefix } = require("../config.json");
module.exports = async (bot, message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  let messageArray = message.content.split(/ +/);
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let commandfile;
  if (bot.commands.has(cmd)) {
    commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  } else {
    return;
  }
  console.log(
    `${message.author.username} Has used the ${(commandfile, cmd)} command in ${
      message.guild.name
    }`
  );
  try {
    commandfile.run(bot, message, args, cmd, commandfile);
  } catch (err) {
    console.log("There was an error loading the commands");
    console.log(err);
  }
};
