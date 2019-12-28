const Discord = require("discord.js");
const chalk = require("chalk");

const { getMember, formatDate } = require("../../functions.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let serverembed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.guild.iconURL)
      .setTitle(`__**${message.guild.name} Server Information**__`)
      .addField(
        "__**General Information:**__",
        `**Server Owner:** ${message.guild.owner}
**Roles Count:** ${message.guild.roles.size}
**Channel Count:** ${message.guild.channels.size}
**Emoji Count:** ${message.guild.emojis.size}
**Created on:** ${formatDate(message.guild.createdAt)}
**Joined:** ${formatDate(message.member.joinedAt)}
**Total | Humans | Bots:** ${message.guild.members.size} | ${
          message.guild.members.filter(member => !member.user.bot).size
        } | ${message.guild.members.filter(member => member.user.bot).size}`,
        true
      )
      .addField(
        "__**Other Information**__",
        `**Region:** ${message.guild.region}
**Verification level:**  ${message.guild.verificationLevel}
**MFA Level:** ${message.guild.mfaLevel}`
      )
      .setColor("#0000FF")
      .setTimestamp();
    message.channel.send(serverembed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the slap command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "serverinfo"
};
