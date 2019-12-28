const chalk = require("chalk");
const { statuses, fail, working } = require("../config.json");
const d = new Date();
const CurrentTime = `${d.getHours() < 10 ? "0" : ""}${d.getHours()}:${
  d.getMinutes() < 10 ? "0" : ""
}${d.getMinutes()}:${d.getSeconds() < 10 ? "0" : ""}${d.getSeconds()} | ${
  d.getDate() < 10 ? "0" : ""
}${d.getDate()}-${d.getMonth() + 1 < 10 ? "0" : ""}${d.getMonth() +
  1}-${d.getFullYear()}`;
module.exports = async bot => {
  function online() {
    var https = require("https");
    https
      .get("https://ghostybot.ga", function(res) {
        bot.channels
          .get("646695061458911243")
          .send("`[INFO]:` " + working + " Website is online and running!");
      })
      .on("error", function(e) {
        bot.channels
          .get("646695061458911243")
          .send(
            "`[INFO]:` " + fail + " Website Wasn't found and is probably down."
          );
        console.log("Website Wasn't found and is probably down.");
      });
  }
  try {
    console.log(chalk.redBright("Connecting to server."));
    console.log(chalk.redBright("Setting up bot."));
    await console.log(chalk.green("Succsesfully connected!"));
    setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      bot.user.setActivity(status, {
        type: "PLAYING"
      });
    }, 15000);
    console.log("Servers:");
    bot.guilds.forEach(guild => {
      console.log(` -  ${guild.name}, ${guild.members.size} Members`);
    });
    console.log(
      `Serving ${bot.users.size} Users on ${bot.guilds.size} Servers`
    );
    console.log(
      chalk.bold.blue(
        `${bot.user.username} is online! Bot started at: ${CurrentTime}`
      )
    );
    bot.channels.get("646695061458911243")
      .send(`\`[INFO]:\` ${working} **Bot Started Successfully on ${CurrentTime}**
    \`[INFO]:\` ${working} Animal Commands loaded succssfully.
    \`[INFO]:\` ${working} Util Commands loaded succssfully.
    \`[INFO]:\` ${working} Admin Commands loaded succssfully.
    \`[INFO]:\` ${working} games Commands loaded succssfully.\n`);
    online();
  } catch (e) {
    console.log(e);
  }
};
