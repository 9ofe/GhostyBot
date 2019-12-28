const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});

  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MEMBERS"))
    return message.channel.send("You don't have perms for that!");
  if (bUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("That person can't be banned!");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField(
      "Banned By",
      `<@${message.author.id}> with ID ${message.author.id}`
    )
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if (!incidentchannel)
    return message.channel.send(
      "Can't find incidents channel, Please make one if needed."
    );

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
  console.log(`${message.author.username} used the ban command`);
};

module.exports.help = {
  name: "ban"
};