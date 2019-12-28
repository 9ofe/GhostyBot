const Discord = require("discord.js");
const chalk = require("chalk");
const fetch = require("node-fetch");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    const q = args.join(" ");
    if (!q) return message.channel.send("Please provide a city.");
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=d4d3ccd8d24178b333fc8c749f5132b1&units=Metric`;
    const result = await fetch(url).then(url => url.json());
    if (!result.name)
      return message.channel.send("Invalid City. Please Provide a valid city");
    const embed = new Discord.RichEmbed()
      .setTitle(`${result.name}'s weather`)
      .setThumbnail(result.weather[3])
      .setDescription(
        `
    **Current weather:** ${result.weather[0].description}
    **Current Temperature:** ${result.main.temp}°C
    **Feels like:** ${result.main.feels_like}°C
    **Minimum temperature:** ${result.main.temp_min}°C
    **Maximum temperature:** ${result.main.temp_max}°C
    **pressure:** ${result.main.pressure}hPa
    **Visibility:** ${result.visibility}%
    **Humidity:** ${result.main.humidity}%
    **Wind speed:** ${result.wind.speed}
    **Wind Derection:** ${result.wind.deg}°
    **Clouds:** ${result.clouds.all}%
    **Country:** ${result.sys.country}`,
        true
      )
      .setTimestamp()
      .setColor("0000FF")
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the help command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "weather"
};
