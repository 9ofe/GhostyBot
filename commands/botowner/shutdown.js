const Discord = require("discord.js");
const botconfig = require("../../config.json");
const fs = require("fs");

exports.run = async function(bot, message) {
  message.delete().catch(O_o => {});
  if (message.author.id !== botconfig.ownerID) {
    message.reply("Only owner is able to use this command!");
    return;
  }
  try {
    await bot.channels
      .get("646695061458911243")
      .send("Bot has successfully shot down by " + message.author.username);
    console.log("Bot has successfully shot down by " + message.author.username);
    await message.channel.send("Bot is shutting down.");
    process.exit();
  } catch (e) {
    console.log(
      chalk.red("Oops! Something went wrong with the profile command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

exports.help = {
  name: "shutdown"
};
