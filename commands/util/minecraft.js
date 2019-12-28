const Discord = require("discord.js");
const chalk = require("chalk");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    const server = args.join(" ");
    if (!server)
      return message.channel.send("Please supply a valid Minecraft Server.");

    const url = `https://mcapi.us/server/status?ip=${server}`;
    const result = await fetch(url).then(url => url.json());
    if (!result.server.name)
      return message.channel.send(
        ":warning: Invalid Minecraft server, Please provide a valid minceraft server."
      );
    let McStatus;
    if (
      result.online === true ? (McStatus = "online") : (McStatus = "offline")
    );

    const embed = new Discord.RichEmbed()
      .setTitle(`${server}`)
      .setDescription(
        `
      **Status:** ${McStatus}
      **Players:** ${result.players.now}
      **Max players:** ${result.players.max}
      **Description:** ${result.motd}
      **Version:** ${result.server.name}
      **Protocol:** ${result.server.protocol}`
      )
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setColor("0000FF");

    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "minecraft"
};
