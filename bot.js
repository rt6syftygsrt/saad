const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NTM5ODMxNTQwMzY5MzI2MTEw.DzLoSQ.rUOrapCf-YXEEqS0YaI5uh9o0dQ'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          






client.on('message', message => {
let prefix = ' $';
if(message.content.startsWith(prefix + "اسكت")){
let muteduser = message.mentions.members.first();
let jif = message.content.split(' ').slice(1);
let durration = jif[1];
let reason = message.content.split(' ').slice(3).join(' ');
let hh;
let muted = message.guild.roles.find(r => r.name === 'Muted');
if(!muteduser){
return message.channel.send('**#- I cannot find this guy**');
}
if(!message.guild.me.hasPermission('ADMINISTRATOR')){
return message.channel.send(`**#- I must have the \`ADMINISTRATOR\` Perms so i can mute people**`);
}
if(muteduser.hasPermission('ADMINISTRATOR')) {
return message.channel.send(`**#- He has a \`ADMINISTRATOR\` Perms and u cannot mute him**`);
}
if(!message.member.hasPermission('ADMINISTRATOR')){
return message.channel.send('**#- You must have \`ADMINISTRATOR\` Perms.**');
}
if(muteduser.id === message.author.id){
return message.channel.send(`**#- You can't mute yourself**`);
}
if(durration && !durration.match(/[1,10][s,m,h,d,w]/g)){
return message.channel.send('**#- Submit a right durration. \n Must be like the following submitation : 1-10 s = second , m = minute , h = hour , d = days, w = weeks**');
}
if(!muted){
return message.guild.createRole({name: 'Muted'});
}
if(!reason){
hh = null;
} else {
hh = reason;
}
if(hh === null){
hh = "No reason detected";
}
message.channel.send(`**${muteduser} Got muted ✅ \n Durration : ${durration}\n Reason : ${hh}**`);
console.log(mms(durration));
message.guild.channels.filter(m => m.type === 'text').forEach(f => { f.overwritePermissions(muted, {
SEND_MESSAGES: false
});
});
message.guild.channels.filter(s => s.type === 'voice').forEach(h => { h.overwritePermissions(muted, {
SPEAK: false
});
});
muteduser.addRole(muted).then(setTimeout(() => {
muteduser.removeRole(muted);
message.channel.send(`**${muteduser} Finally got unmuted ✅**`);
}, mms(durration)));
}
});
