const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    message.channel.send(`10${bot.totalShardCount}`);
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
  name: "shard"
};
