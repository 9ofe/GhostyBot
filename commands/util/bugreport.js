const Discord = require("discord.js");
const { blue } = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let bug = args.join(" ");
    if (!bug) return message.channel.send("Please provide a bug to report.");
    const channelEmbed = new Discord.RichEmbed()
      .setColor("0000FF")
      .setTitle(`${message.author.username}'s Bug`)
      .addField("You successfully reported your bug", bug)
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(channelEmbed);
    const botlogsEmbed = new Discord.RichEmbed()
      .setColor("0000FF")
      .setTitle(
        `${message.author.username} has reported a bug, Server: ${message.guild.name}`
      )
      .setDescription(bug)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);
    bot.channels
      .get("646695061458911243")
      .send(`\`[INFO]:\` :warning: Somebody has reported a bug.`, botlogsEmbed);
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
  name: "bugreport"
};
