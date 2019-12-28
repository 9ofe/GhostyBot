const Discord = require("discord.js");
const chalk = require("chalk");
const translate = require("@k3rn31p4nic/google-translate-api");

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
      return message.channel.send("Invalid permissions");
    }
    if (!channel.permissionsFor(message.guild.me).has("MANAGE_CHANNELS")) {
      return message.channel.send("Invalid permissions");
    }

    const embed = new Discord.RichEmbed()
      .setTitle("Updates channel topic")
      .setDescription(`Channel topic was changed too: **${topic}**`)
      .setFooter("Google translate*");
    await channel.setTopic(topic);
    await message.channel.send(embed);
  } catch (err) {
    console.log(chalk.red("Missing perms"), err);
    message.channel.send("O");
  }
};

module.exports.help = {
  name: "ct"
};
