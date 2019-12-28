const request = require("request");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    let cn = request("http://api.adviceslip.com/advice", function(
      err,
      res,
      body
    ) {
      let cnj = JSON.parse(body);
      message.channel.send(cnj.slip.advice);
      console.log(`${message.author.username} used the advice command`);
    });
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the work command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

exports.help = {
  name: "advice"
};
