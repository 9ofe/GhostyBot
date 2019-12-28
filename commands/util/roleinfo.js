const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  let role = message.mentions.roles.first();
  if (!role) {
    role = message.guild.roles.find(role => role.name === args.join(" "));
  }
  if (!role) {
    message.channel.send("Couldn't find that role");
  }
  const created = formatDate(role.createdAt);

  const embed = new RichEmbed()
    .setTimestamp()
    .setTitle(`${role.name} info`)
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("0000ff")
    .addField(
      `Role Information`,
      `**ID:** ${role.id}\n **Role Created: **${created}`
    )

    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp();
  message.channel.send(embed);
};

module.exports.help = {
  name: "roleinfo"
};
