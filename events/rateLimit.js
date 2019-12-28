module.exports = async (bot, guild) => {
  bot.channels
    .get("646695061458911243")
    .send(`\`[INFO]:\` :warning: The Bot is being rate limited at the moment`);
};
