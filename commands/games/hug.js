const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    let member = message.mentions.members.first();
    require("request")(
      { url: "https://nekos.life/api/hug", json: true },
      (req, res, json) => {
        if (member) {
          let embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username} Hugs ${member.user.username}`)
            .setColor("0000FF")
            .setImage(json.url)
            .setFooter(
              message.author.username,
              message.author.displayAvatarURL
            );
          message.channel.send(embed);
        } else
          message.reply("You need to metion an user that you want to hug.");
      }
    );
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the hug command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "hug"
};
