const exec = require("child_process").exec;
const botconfig = require("../../config.json");
module.exports.run = async (bot, message, args) => {
  if (message.author.id !== botconfig.ownerID) {
    message.reply("Only owner is able to use this command!");
    return;
  }
  message.delete().catch(O_o => {});
  const executio = args.join(" ");
  if (!executio) return message.channel.send("Please provide a valid command");
  exec(executio, (error, stdout) => {
    const response = error || stdout;
    message.channel
      .send(`Ran: ${message.content}\n\`\`\`${response}\`\`\``, { split: true })
      .catch(console.error);
  });
};

module.exports.help = {
  name: "exec"
};
