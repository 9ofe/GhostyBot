const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete().catch(O_o => {});
    let tags = args.join(" ");
    if (!message.member.hasPermission("MANAGE_MEMBERS"))
      return message.channel.send("You don't have perms for that!");

    const bans = await message.guild.fetchBans();
    const user = bans.find(user => `${user.username}#${user.discriminator}` === tags);

    if(!user) return message.channel.send('Failed');
    
    await message.guild.unban(user.id);
    message.channel.send(`Successfully unbanned ${user.username}.`)



    console.log(`${message.author.username} used the unban command`);
  } catch (err) {
    console.log(
        chalk.red("Oops! Something went wrong with the unban command: "),
        err
      );
      message.reply(
        ":warning: Oops something went wrong! Please contact `CasperTheGhost#4546`"
      );
  }
};

module.exports.help = {
  name: "unban"
};
