const Discord = require("discord.js");
const chalk = require("chalk");
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports.run = async (bot, message, args) => {
  try {
    let result = await translate(args.slice(1).join(" "), { to: args[0] });

    const embed = new Discord.RichEmbed()
      .setTitle("Google Translate")
      .setDescription(result.text)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the afk command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "translate"
};
