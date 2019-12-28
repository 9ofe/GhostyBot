const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send(`
**Boop.**
**Beep.**
**Boop.**`);
}

module.exports.help = {
    name:"beep"
}