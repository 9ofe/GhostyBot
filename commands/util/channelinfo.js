const Discord = require("discord.js");
const { get } = require("snekfetch");
const chalk = require("chalk");
const { getMember, formatDate } = require("../../functions.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let channel = message.mentions.channels.first();
    if (!channel) {
      if (parseInt(args[0]) < 9223372036854775807) {
        channel = message.guild.channels.get(args[0]);
      } else channel = message.channel;
    }
    const created = formatDate(channel.createdAt);

    if (channel) {
      let title;
      if (channel.type === "text") {
        title = "Text Channel Info";
      } else {
        title = "Voice Channel Info";
      }
      let topic;
      if (channel.topic < 2) {
        topic = "No topic set.";
      } else {
        topic = channel.topic;
      }
      const embed = new Discord.RichEmbed()
        .setTitle(channel.name)
        .setDescription(title)
        .addField("Channel Topic", `${topic}`)
        .addField("Channel ID", `${channel.id}`)
        .addField("Created at", `${created}`)
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setColor("0000FF");
      await message.channel.send(embed);
    }
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the boobs command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "channelinfo"
};
