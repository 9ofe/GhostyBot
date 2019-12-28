module.exports.run = async (bot, message, args) => {
  message.react("🍎");
  message.react("🍊");
  message.react("🍇");
};

exports.help = {
  name: "fruits"
};
