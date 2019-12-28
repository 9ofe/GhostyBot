const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
require("dotenv").config();
const nekosAPI = require("nekos.life");
bot.nekoslife = new nekosAPI();
const token = process.env.TOKEN;
const YoutubeToken = process.env.YoutubeToken;
const { ownerID } = require("./config.json");
bot.music = require("discord.js-musicbot-addon");
bot.music.start(bot, {
  youtubeKey: YoutubeToken,
  play: {
    usage: "{{prefix}}play some tunes",
    exclude: false
  },
  anyoneCanSkip: true,
  ownerOverMember: true,
  ownerID: ownerID,
  cooldown: {
    enabled: false
  }
});

// Load all needed files and commands:
require("./command")(bot);
require("./modules/events")(bot);
bot.login(token);
