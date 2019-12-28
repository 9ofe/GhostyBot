const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  // const roleUsers = roles.members.size;
  const roles =
    message.guild.roles
      .filter(r => r.id !== message.guild.id)
      .map(r => r)
      .join(`,\n`) || "none";
  const embed = new RichEmbed()
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("0000ff")
    .addField(`**Server Roles:**`, `${roles} `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp();
  message.channel.send(embed);
};

module.exports.help = {
  name: "roles"
};
