const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let happy = Math.floor(Math.random() * 100) + 1;
    message.delete().catch(O_o => {});
    const embed = new Discord.RichEmbed()
      .setColor("0000FF")
      .setTitle(`You're happiness is ${happy}%`)
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
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
  name: "happy"
};
