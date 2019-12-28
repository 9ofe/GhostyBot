const Discord = require("discord.js");
const ownerID = "406323530301571072";
const util = require("util");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ownerID) {
    message.reply("Only owner is able to use this command!");
    return;
  }
  let toEval = args.join(" ");
  let evaluated = util.inspect(eval(toEval, { depth: 0 }));
  try {
    message.delete().catch(O_o => {});
    if (toEval) {
      let hrStart = process.hrtime();
      let hrDiff;
      hrDiff = process.hrtime(hrStart);
      return message.channel.send(
        `Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ""}${hrDiff[1] /
          1000000}ms.\`\`\`JavaScript\n${evaluated}\n\`\`\``,
        { maxLenght: 1000 }
      );
    } else {
      message.channel.send("Error, cannot eval air");
    }
  } catch (err) {
    console.log(err);
    message.channel.send(
      ":warning: Oops something went wrong. Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "eval"
};
