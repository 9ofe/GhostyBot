const chalk = require("chalk");
// const bot = require("./index.js");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (bot, message) => {
  try {
    bot.commands = new Discord.Collection();

    fs.readdir("./commands/animal", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands in animal.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/animal/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);

        bot.commands.set(props.help.name, props);
      });
    });
    fs.readdir("./commands/NSFW", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands in animal.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/NSFW/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);

        bot.commands.set(props.help.name, props);
      });
    });
    fs.readdir("./commands/games", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands in games.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/games/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);
        bot.commands.set(props.help.name, props);
      });
    });
    fs.readdir("./commands/admin", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands in admin.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/admin/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);
        bot.commands.set(props.help.name, props);
      });
    });
    fs.readdir("./commands/util", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands in util.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/util/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);
        bot.commands.set(props.help.name, props);
      });
    });

    fs.readdir("./commands/botowner", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands in botowner.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/botowner/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);
        bot.commands.set(props.help.name, props);
      });
    });

    fs.readdir("./commands/currency", (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
      }

      jsfile.forEach((f, i) => {
        let props = require(`./commands/currency/${f}`);
        console.log(chalk.bold.blue("[INFO]: "), `${f} loaded!`);
        bot.commands.set(props.help.name, props);
      });
    });
  } catch (e) {
    console.log(e);
  }
};
