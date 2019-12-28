module.exports = async (bot, guild) => {
  const { working } = require("../config.json");
  bot.channels
    .get("646695061458911243")
    .send(
      `\`[INFO]:\` ${working} Joined a new server called: **${
        guild.name
      }** with **${bot.guilds.array().length} Members**!`
    );
};
