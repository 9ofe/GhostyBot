const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    let channel = message.mentions.channels.first();
    let topic;
    if (!channel) {
      channel = message.channel;
      topic = args.join(" ");
    } else {
      topic = args
        .slice(1)
        .join(" ")
        .trim();
    }

    if (!channel.permissionsFor(message.member).has("MANAGE_CHANNELS")) {
      return message.channel.send(
        "sorry, you don't have permissions for this command. You need **Manages Channels** Permissions."
      );
    }
    if (!channel.permissionsFor(message.guild.me).has("MANAGE_CHANNELS")) {
      return message.channel.send(
        "I have invalid permissions. I need **Manage Channels** Permissions."
      );
    }

    const embed = new Discord.RichEmbed()
      .setTitle("Updates channel topic")
      .setDescription(`Channel topic was changed too: **${topic}**`)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);
    await channel.setTopic(topic);
    await message.channel.send(embed);
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
  name: "ctopic"
};
