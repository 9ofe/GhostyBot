const sa = require("superagent");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  message.delete().catch(O_o => {});
  let { body } = await sa.get(`https://icanhazdadjoke.com/slack`);
  message.channel
    .send(body.attachments.map(a => a.text))
    .then(function(message) {
      message.react("😂");
    });
};

// exports.conf = {
//   enabled: true,
//   guildOnly: false,
//   aliases: [],
//   permLevel: "User"
// };

exports.help = {
  name: "dadjoke",
  category: "Fun",
  description: "it tells you dad joke",
  usage: "dadjoke",
  cooldown: 10
};
