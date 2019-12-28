const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  const member = getMember(message, args.join(" "));

  // Member variables
  const joined = formatDate(member.joinedAt);
  const roles =
    member.roles
      .filter(r => r.id !== message.guild.id)
      .map(r => r)
      .join(", ") || "none";

  // User variables
  const created = formatDate(member.user.createdAt);

  const embed = new RichEmbed()
    .setFooter(member.displayName, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(
      "0000ff" /*member.displayHexColor === '#0000ff' ? '#0000ff' : member.displayHexColor*/
    )

    .addField(
      "**Member information:**",
      stripIndents`** Display name:** ${member.displayName}
           ** Joined at:** ${joined}
           ** Roles:** ${roles}
           ** Status**: ${message.author.presence.status}`,
      true
    )

    .addField(
      "**User information:**",
      stripIndents`** ID:** ${member.user.id}
           ** Username**: ${member.user.username}
           ** Tag**: ${member.user.tag}
           ** Created at**: ${created}`,
      true
    )

    .setTimestamp();

  if (member.user.presence.game)
    embed.addField(
      "Currently playing",
      stripIndents`** Name:** ${member.user.presence.game.name}`
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "userinfo",
  aliases: ["who", "userinfo"],
  description: "Returns user information",
  usage: "[username | id | mention]"
};
