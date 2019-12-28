const Discord = require("discord.js");
const moment = require("moment");
const cpu = require("pidusage");
const { version, author } = require("discord.js");
require("moment-duration-format");
const BOTversion = "5.3.1";
// const DBL = require('dblapi.js');
// const dbl = new DBL('')

exports.run = (client, message, channels, bot) => {
  message.delete().catch(O_o => {});
  try {
    // const Vote = dbl.getVotes().then(votes => {
    //   if (votes.find(vote => vote.id == '')) console.log("Someone has voted")
    // })
    cpu(process.pid, async (err, stats) => {
      const duration = moment
        .duration(client.uptime)
        .format(" D [days], H [hrs], m [mins], s [secs]");
      const d = new Date();

      const embed = new Discord.RichEmbed()
        .setColor("0000FF")
        .setTitle("__**Ghostybot Information Page**__")
        .addField("Bot ID", "632843197600759809")
        .addField("Bot Username", "GhostyBot#0267")
        .addField(
          "System Info",
          `**RAM Usage:** ${(
            process.memoryUsage().heapUsed /
            1024 /
            1024
          ).toFixed(2)}MB
      **CPU Usage:** ${Math.round(stats.cpu)}%
      **Bot Uptime:** ${duration}
      **Node.js:** ${process.version}
      **Discord.js:** ${version}
      **Dependencies:** ${
        Object.keys(require("../../package").dependencies).length
      }
      **Startup Time:** 6 seconds
      **Voice Connections:** ${client.voiceConnections.size}
      `
        )
        .addField(
          "Bot Info",
          `**Game:** ${client.user.presence.game}
      **Status:** ${client.user.presence.status}
      **Users:** ${client.users.size}
      **Servers:** ${client.guilds.size}
      **Created on:** ${client.user.createdAt}
      **Bot's Region:** :flag_eu: Central Europe
      **Bot Owner:** \`CasperTheGhost#4546\`, <@406323530301571072>
      **Latest Update:** 9/12/2019 Changes: Added some more commands, Fixed some other stuff.
      `
        )
        // **Votes: ${Vote}
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setColor("#0000FF");

      message.channel.send(embed);
    });
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the status command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
  console.log(`${message.author.username} used the botinfo command`);
};

exports.help = {
  name: "botinfo",
  category: "System",
  description: "Reuturns the bot's status",
  usage: "botinfo"
};
