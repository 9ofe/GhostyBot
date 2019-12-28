const math = require("mathjs");
const Discord = require("discord.js");
var fs = require("fs"); //FileSystem

exports.run = (client, message, args) => {
  if (!args[0])
    return message.channel.send("Enter some maths, can't wait to solve it!");

  let resp;
  try {
    resp = math.evaluate(args.join(" "));
  } catch (e) {
    return message.channel
      .send({
        embed: {
          description: "I-i think I can't do that...",
          color: "0000FF"
        }
      })
      .then(msg => {
        if (conf[message.guild.id].delete == "true") {
          msg.delete(conf[message.guild.id].deleteTime);
        }
      });
  }

  const embed = new Discord.RichEmbed()
    .setColor("0000FF")
    .setTitle("Result:")
    .addField("Input", `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField("Output", `\`\`\`js\n${resp}\`\`\``)
    .setFooter(message.author.username, message.author.displayAvatarURL);

  message.channel.send(embed);
};

exports.help = {
  name: "calc"
};
