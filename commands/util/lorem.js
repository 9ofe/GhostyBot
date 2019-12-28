const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .addField(
      "Lorem Ipsum",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin purus id sapien ullamcorper, quis fringilla urna porta. Curabitur ac bibendum enim, non condimentum ipsum. In hac habitasse platea dictumst. Ut ornare lorem eget dolor feugiat aliquam sed vel ligula. Vivamus non turpis id arcu blandit interdum in et metus. Curabitur eu pharetra purus, vestibulum malesuada lectus. Etiam convallis nulla id auctor rhoncus. Donec feugiat, elit in iaculis laoreet, ipsum nisl auctor ex, quis efficitur nunc sem ac nunc. Mauris sit amet gravida justo, eu molestie enim. Nunc id turpis molestie, facilisis erat non, fermentum tellus. Pellentesque ultricies tellus nec lobortis egestas. Aenean iaculis elementum dictum. Vestibulum at placerat libero."
    )
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor("#0000FF")
    // .setThumbnail(bicon)
    .setTimestamp();

  message.channel.send(botembed);
};

module.exports.help = {
  name: "lorem"
};
