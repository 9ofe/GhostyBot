const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    if (!args[1]) return message.reply("Please Ask a full question!");
    const replies = require("../../modules/8ball.json");

    let result = Math.floor(Math.random() * replies.length);
    let question = args.join(" ");
    let ballembed = new Discord.RichEmbed()
      .setTitle("8Ball")
      .setColor("#0000FF")
      .addField("Question", question)
      .addField("Answer", replies[result])
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp();

    message.channel.send(ballembed);
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

module.exports.help = {
  name: "8ball"
};
