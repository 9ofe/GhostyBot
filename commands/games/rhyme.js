const Discord = require("discord.js");
const chalk = require("chalk");
const rhyme = require("rhyme");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});

    if (!args[0]) return message.reply("Please type a word you want to rhyme.");

    await message.channel.send("Searching for rhymes...");
    rhyme(async rl => {
      let rhymes = "";
      let words = rl.rhyme(args.join(" "));
      words.forEach(word => {
        rhymes += word.toLowerCase() + ", ";
      });
      rhymes = rhymes.slice(0, -2);
      message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
        .setTitle("**Rhyme**")
        .setDescription(
          `**Rhyming words:**\n${rhymes || "Sorry, no rhymes found."}`
        )
        .setColor("0000ff")
        .setFooter(message.author.username, message.author.displayAvatarURL);
      await message.channel.send(embed);
    });
  } catch (err) {
    console.log(
      chalk.red("Oops! Something went wrong with the slap command: "),
      err
    );
    message.reply(
      ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
    );
  }
};

module.exports.help = {
  name: "rhyme"
};
