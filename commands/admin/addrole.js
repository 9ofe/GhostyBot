    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));
  console.log(`${message.author.username} used the addrole command`)      

  try{
    await message.channel.send(`Congrats, <@${rMember.id}> got ${gRole.name}!`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}>, that won't happen `)
  }
  console.log(`${message.author.username} used the addrole command`)      
}

module.exports.help = {
  name: "addrole"
}