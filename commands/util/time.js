const Discord = require("discord.js");
const chalk = require("chalk");
const moment = require("moment-timezone");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    var newYork = moment.tz("America/New_York");
    var Losangelos = moment.tz("America/Los_Angeles");
    var Toronto = moment.tz("America/Toronto");
    var Chicago = moment.tz("America/Chicago");
    var Belgium = moment.tz("Europe/Brussels");
    var London = moment.tz("Europe/London");
    var London = moment.tz("Europe/London");
    var Paris = moment.tz("Europe/Paris");
    var Berlin = moment.tz("Europe/Berlin");
    var Tokyo = moment.tz("Asia/Tokyo");
    var Perth = moment.tz("Australia/Perth");
    var Sydney = moment.tz("Australia/Sydney");
    var Rome = moment.tz("Europe/Rome");
    var Singapore = moment.tz("Asia/Singapore");
    // console.log(result);

    const embed = new Discord.RichEmbed()
      .setTitle("World time zones")
      .addField("Los Angeles, US", Losangelos, true)
      .addField("New York, US", newYork, true)
      .addField("Chicago, US", Chicago, true)
      .addField("Toronto, Canada", Toronto, true)
      .addField("Brussels, Belgium", Belgium, true)
      .addField("London, UK", London, true)
      .addField("Berlin, Germany", Berlin, true)
      .addField("Paris, France", Paris, true)
      .addField("Rome, Italy", Rome, true)
      .addField("Tokyo, Japan", Tokyo, true)
      .addField("Singapore, Asia", Singapore, true)
      .addField("Perth, Australia", Perth, true)
      .addField("Australia, Sydney", Sydney, true)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setColor("0000FF");

    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.channel.send("Sorry, I couldn't find that user.");
  }
};

module.exports.help = {
  name: "time"
};
