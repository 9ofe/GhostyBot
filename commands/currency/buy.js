const Discord = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let user = message.author;
    let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let bicon = message.author.displayAvatarURL;
    let bank = db.fetch(`bank_${message.guild.id}_${user.id}`);

    if (!args[0])
      return message.channel.send(
        `:warning: Please type \`r?store\` to see all available items.`
      );

    if (args[0] == "bronze") {
      if (author < 2000)
        return message.channel.send(`You need 2000 Coins to buy Bronze VIP.`);

      db.fetch(`bronze${message.guild.id}_${user.id}`);
      db.set(`bronze_${message.guild.id}_${user.id}`, true);

      let embed = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought Bronze VIP for 2000 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 2000);
      message.channel.send(embed);
    } else if (args[0] == "nikes") {
      if (author < 400)
        return message.channel.send(`You need 400 Coins to buy nikes.`);

      db.fetch(`nikes_${message.guild.id}_${user.id}`);
      db.set(`nikes_${message.guild.id}_${user.id}`, true);

      let NikesEmbed = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought Nikes for 400 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 400);
      message.channel.send(NikesEmbed);
    } else if (args[0] == "computer") {
      if (author < 1200)
        return message.channel.send(`You need 1200 Coins to buy a computer.`);

      db.fetch(`computer_${message.guild.id}_${user.id}`);
      db.set(`computer_${message.guild.id}_${user.id}`, true);

      let ComputerEmbed = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought a Computer for 1200 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 1200);
      message.channel.send(ComputerEmbed);
    } else if (args[0] == "guitar") {
      if (author < 600)
        return message.channel.send(`You need 600 Coins to buy a guitar.`);

      db.fetch(`guitar_${message.guild.id}_${user.id}`);
      db.set(`guitar_${message.guild.id}_${user.id}`, true);

      let guitarEmbed = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought a guitar for 600 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 600);
      message.channel.send(guitarEmbed);
    } else if (args[0] == "desk") {
      if (author < 230)
        return message.channel.send(`You need 230 Coins to buy a desk.`);

      db.fetch(`desk_${message.guild.id}_${user.id}`);
      db.set(`desk_${message.guild.id}_${user.id}`, true);

      let deskEmbed = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought a new desk for 230 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 230);
      message.channel.send(deskEmbed);
    } else if (args[0] == "iphone") {
      if (author < 450)
        return message.channel.send(`You need 450 Coins to buy an Iphone 11.`);

      db.fetch(`iphone_${message.guild.id}_${user.id}`);
      db.set(`iphone_${message.guild.id}_${user.id}`, true);

      let phone = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought an Iphone 11 for 450 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 450);
      message.channel.send(phone);
    } else if (args[0] == "car") {
      if (author < 7500)
        return message.channel.send(`You need 7500 Coins to buy a Car.`);

      db.fetch(`car_${message.guild.id}_${user.id}`);
      db.set(`car_${message.guild.id}_${user.id}`, true);

      let car = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought a car for 7500 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 7500);

      message.channel.send(car);
    } else if (args[0] == "house") {
      if (author < 10000)
        return message.channel.send(`You need 10000 Coins to buy a house.`);

      db.fetch(`house_${message.guild.id}_${user.id}`);
      db.set(`house_${message.guild.id}_${user.id}`, true);

      let house = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought a house for 10000 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 10000);
      message.channel.send(house);
    } else if (args[0] == "mansion") {
      if (author < 20000)
        return message.channel.send(`You need 20000 Coins to buy a mansion.`);

      db.fetch(`mansion_${message.guild.id}_${user.id}`);
      db.set(`mansion_${message.guild.id}_${user.id}`, true);

      let mansion = new Discord.RichEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully bought a mansion for 20000 coins.`)
        .setColor("0000FF")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

      db.subtract(`money_${message.guild.id}_${user.id}`, 20000);
      message.channel.send(mansion);
    }
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the weekly command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "buy"
};
