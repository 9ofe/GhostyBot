const Discord = require("discord.js");
const ms = require("ms");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    if (
      !message.member.hasPermission("MAGAGE_MESSAGES") ||
      !message.guild.owner
    )
      return message.reply("You don't have permssions for this command.");

    let rMember =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user");
    let role = args.join(" ").slice(22);
    let gRole = message.guild.roles.find(r => r.name === "muted");
    if (!rMember.roles.has(gRole.id))
      return message.reply("They don't have that role.");
    await rMember.removeRole(gRole.id);

    // let muteRole = message.guild.roles.find(r => r.name === "muted");
    // if(!muteRole) return message.channel.send("That user is not muted.");
    const embed = new Discord.RichEmbed()
      .setTitle(`**<@${rMember.id}> has been unmuted.**`)
      .setDescription(`**Unmuted by ${message.author.username}**`)
      .setTimestamp()
      .setColor("0000ff")
      .setFooter(message.author.username, message.author.displayAvatarURL);
    await message.channel.send(embed);
    console.log(`${message.author.username} used the unmute command`);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the unmute command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "unmute"
};
