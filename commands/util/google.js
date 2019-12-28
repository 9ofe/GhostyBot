const chalk = require("chalk");
const botconfig = require("../../config.json");
module.exports.run = async (bot, message, args) => {
  try {
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
