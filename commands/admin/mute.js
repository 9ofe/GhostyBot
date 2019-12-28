const Discord = require("discord.js");
const ms = require("ms");
const blue = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You don't have permssions for this command.");
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Can't mute them!");
    let reason = args.slice(1).join(" ");
    if (!reason) return message.reply("Please supply a reason.");

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    tomute.addRole(muterole);
    message.delete().catch(O_o => {});

    let muteembed = new Discord.RichEmbed()
      .setTitle(`**${tomute} was muted for ${reason}**`)
      .setDescription(`** Muted by ${message.author.username}**`)
      .setTimestamp()
      .setColor("0000ff")
      .setFooter(message.author.username, message.author.displayAvatarURL);

    message.channel.send(muteembed);
    console.log(`${message.author.username} used the mute command`);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the mute command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "mute"
};
