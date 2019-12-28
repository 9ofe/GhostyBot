const chalk = require("chalk");
const botconfig = require("../../config.json");
module.exports.run = async (bot, message, args) => {
  if (message.author.id !== botconfig.ownerID) {
    message.reply("Only owner is able to use this command!");
    return;
  }
  try {
    if (args == "online") {
      await bot.user.setStatus("online");
      message.channel.send("status changed too online");
    } else if (args == "idle") {
      await bot.user.setStatus("idle");
      message.channel.send("status changed too idle");
    } else if (args == "dnd") {
      await bot.user.setStatus("dnd");
      message.channel.send("status changed too dnd");
    } else if (args == "invis") {
      await bot.user.setStatus("invisible");
      message.channel.send("status changed too invisible");
    } else {
      message.channel.send("Please provide a valid status");
    }
    // message.delete().catch(O_o => {});
    // if (args.status && /^(?:online|idle|dnd|invisible)$/i.test(args.status)) {
    //   message.channel.send("Test");
    // } else {
    //   message.channel.send("Please provide a valid status");
    // }
  } catch (e) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      e
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "status"
};
