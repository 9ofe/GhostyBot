module.exports = async (bot, guild) => {
  const { fail } = require("../config.json");
  bot.channels
    .get("646695061458911243")
    .send(
      `\`[INFO]:\` ${fail} Left a server called: **${guild.name}** with **${
        bot.guilds.array().length
      } Members**!`
    );
};
