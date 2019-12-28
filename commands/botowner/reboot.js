const Discord = require("discord.js");
const chalk = require("chalk");
const token = process.env.TOKEN;
const { ownerID, fail } = require("../../config.json");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    if (message.author.id !== ownerID) {
      message.reply(fail + " Only owner is able to use this command!");
      return;
    }
    bot.destroy();
    require("../../index");
    require("../../command");
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
  name: "reboot"
};
