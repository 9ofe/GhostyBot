const Discord = require("discord.js");
const { blue } = require("../../config.json");

module.exports.run = async (bot, message, args, cmd, commandfile) => {
  try {
    message.delete().catch(O_o => {});
    const site = "https://ghostybot.ga";
    const embed = new Discord.RichEmbed()
      .setDescription(
        `**Prefix:** \`r?\`
  **website:** ${site}
  Need the bot Owner or Support? 
  **Support server:** https://discord.gg/jUtGZw7
  **Patreon**: https://patreon.com/caspertheghosty
  **Bot Owner:** \`CasperTheGhost#4546\`, <@406323530301571072>
  **Total Commands:** \`105\` `
      )
      .addField(
        "Fun Commands",
        "```8ball, dadjoke, randomjoke, ping, beep, wyr, rps, advice, bet, poll, dice6, dice10, dice100, flipcoin, fruits, bingo, meme, yomama, hug, kiss, tickle, slap, rhyme, owo, happy, iq, clyde, fbi, shrug, love, poke, punch, block```"
      )
      .addField(
        "Animal Commands",
        "```cat, catfact, dog, fox, duck, bird, lizard, bunny```"
      )
      .addField(
        "Utiliy Command",
        "```website, calc, report, test, serverinfo, invite, botinvite, userinfo, avatar, lorem, emoji, randomnumber, color, dependencies, instagram, bugreport, channelinfo, roles, roleinfo, morse, define, time, weather, minecraft, translate```"
      )
      .addField(
        "Currency Commands",
        "```work, balance, weekly, store, buy, profile```"
      )
      .addField("NSFW commands", "```butts, boobs, hentai, neko```")
      .addField(
        "Music Commands",
        "```play, queue, remove, skip, leave, search, pause, resume, volume, loop, np```"
      )
      .addField(
        "Moderation Commands",
        "```addrole, removerole, kick, ban, unban, warn, mute, unmute, delete, ctopic```"
      )
      .addField("Owner Commands", "```eval, exec, shutdown, servers, status```")
      .setColor(blue)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp();
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
  name: "help"
};
