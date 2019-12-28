exports.run = async (client, message, args, level) => {
  message.channel.send(
    `Invite ${client.user.username} here: \n<https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958591>`
  );
};
exports.help = {
  name: "botinvite"
};
