const joke = require("one-liner-joke").getRandomJoke;

exports.run = async (bot, message, args, level) => {
  // eslint-disable-line no-unused-vars
  message.delete().catch(O_o => {});
  try {
    message.channel.send(
      joke({ exclude_tags: ["dirty", "racist", "marriage", "sex", "death"] })
        .body
    );
  } catch (err) {
    message.channel.send("There was an error!\n" + err).catch();
  }
};

exports.help = {
  name: "randomjoke",
  category: "General",
  description: "Returns a random joke",
  usage: "randomjoke"
};
