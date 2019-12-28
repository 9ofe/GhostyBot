module.exports = async bot => {
  bot.channels
    .get("646695061458911243")
    .send(`\`[INFO]:\` :warning: **Disconnected!**`);
  bot.login(process.env.TOKEN);
};
