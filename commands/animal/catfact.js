const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    require('request')({url: 'https://cat-fact.herokuapp.com/facts', json: true}, (req, res, json) => {
      let embed = new Discord.RichEmbed()
      .setTitle('Cat Fact')
      .setColor('#0000ff')
      .setDescription(json.all[Math.floor(Math.random() * json.all.length + 1) -1].text);
      
      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
  console.log(`${message.author.username} used the catfact command`)      
};


exports.help = {
  name: 'catfact',
  category: 'Fun',
  description: 'Returns a cat fact',
  usage: 'catfact'
};
