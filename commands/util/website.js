exports.run = async (client, message, args, level) => {
  await message.channel.send({
    embed: {
      title: "Visit ghostybot.ga Here",
      url: "https://ghostybot.ga",
      color: 00255,
      footer: message.author.username + message.author.displayAvatarURL
    }
  });
};

exports.help = {
  name: "website"
};
