const Discord = require("discord.js");
const { ownerID } = require("../../config.json");
const util = require("util");

exports.run = function(bot, message, args) {
  message.delete().catch(O_o => {});
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
      const embed = new Discord.RichEmbed()
        .setTitle("Eval command")
        .addField("**Input:**", `\`\`\`${toEval}\`\`\``)
        .addField("**Output:**", ` \`\`\`${evaluated}\`\`\``)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      return message.channel.send(embed);
    } else {
      message.channel.send("Error, cannot eval nothing.");
    }
  } catch (err) {
    console.log(err);
    message.channel.send(
      ":warning: Oops something went wrong. Please contact `CasperTheGhost#4546`"
    );
  }
};

exports.help = {
  name: "eval"
};
