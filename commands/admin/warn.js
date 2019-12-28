const Discord = require("discord.js");
const fs = require("fs");
//const ms = require("ms");
let warns = require("../../modules/warnings.json");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    //!warn @daeshan <reason>
    if (!message.member.hasPermission("MANAGE_MEMBERS"))
      return message.reply("You don't have perms for that!");
    let wUser =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!wUser) return message.reply("Couldn't find them yo");
    if (wUser.hasPermission("MANAGE_MESSAGES"))
      return message.reply("They can't be warned!");
    let reason = args.join(" ").slice(22);

    if (!warns[wUser.id])
      warns[wUser.id] = {
        warns: 0
      };

    warns[wUser.id].warns++;

    fs.writeFile("../../modules/warnings.json", JSON.stringify(warns), err => {
      if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
      .setDescription("Warns")
      .setAuthor(message.author.username)
      .setColor("#fc6400")
      .addField("Warned User", `<@${wUser.id}>`)
      .addField("Warned In", message.channel)
      .addField("Number of Warnings", warns[wUser.id].warns)
      .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`, "incidents");
    if (!warnchannel)
      return message.reply(
        "Couldn't find incidents channel, Please make one if needed."
      );

    warnchannel.send(warnEmbed);

    if (warns[wUser.id].warns == 2) {
      let muterole = message.guild.roles.find(`name`, "muted");
      if (!muterole)
        return message.reply("No muted role found, please create one!");

      let mutetime = "10s";
      await wUser.addRole(muterole.id);
      message.channel.send(`<@${wUser.id}> has been temporarily muted`);

      setTimeout(function() {
        wUser.removeRole(muterole.id);
        message.reply(`<@${wUser.id}> has been unmuted.`);
      }, ms(mutetime));
    }
    if (warns[wUser.id].warns == 5) {
      message.guild.member(wUser).ban(reason);
      message.reply(`<@${wUser.id}> has been banned.`);
    }
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the warning command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "warn"
};
