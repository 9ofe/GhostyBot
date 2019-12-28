const Discord = require("discord.js");
var fs = require("fs"); //FileSystem //Config file
var randomColor = require("randomcolor"); // import the script

exports.run = (client, message, args) => {
  message.delete().catch(O_o => {});
  var color = randomColor(); // a hex code for an attractive color

  const embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle(color)
    .setFooter(message.author.username, message.author.displayAvatarURL);

  message.channel.send(embed);
};

exports.help = {
  name: "color"
};
