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






let rab6 = JSON.parse(fs.readFileSync('./rab6.json' , 'utf8'));
client.on('message', message => {
if(message.content.startsWith(prefix + "toggleLink")) {
if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!rab6[message.guild.id]) rab6[message.guild.id] = {
onoff: 'Off'
}
if(rab6[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The Invite Link Cmd Is __𝐎𝐍__ !**`), rab6[message.guild.id].onoff = 'On']
if(rab6[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The Invite Link Cmd Is __𝐎𝐅𝐅__ !**`), rab6[message.guild.id].onoff = 'Off']
fs.writeFile("./rab6.json", JSON.stringify(rab6), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
});
}
})
const coolDown = new Set();
client.on('message', message => {
if (message.content.startsWith("ﺭﺍﺑﻂ ")) {
if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
if(!rab6[message.guild.id]) rab6[message.guild.id] = {
onoff: 'Off'
}
if(rab6[message.guild.id].onoff === 'Off') return;
if(coolDown.has(message.author.id)) return message.channel.send(`**⏱ | ${message.author.username}, your invite 💴 link refreshes in \`\`1 Day\`\`.**`);
message.channel.createInvite({
thing: true,
maxUses: 5,
maxAge: 86400
}).then(invite =>
message.author.sendMessage(invite.url)
)
message.channel.send("** ﺗﻢ ﺍﺭﺳﺎﻝ ﺍﻟﺮﺍﺑﻂ ﺑﺮﺳﺎﻟﺔ ﺧﺎﺻﺔ **") .then(() => {
coolDown.add(message.author.id);
});
message.author.send(`** ﻣﺪﺓ ﺍﻟﺮﺍﺑﻂ : ﻳـﻮﻡ
ﻋﺪﺩ ﺍﺳﺘﺨﺪﺍﻣﺎﺕ ﺍﻟﺮﺍﺑﻂ : 5 **`)
}
setTimeout(() => {
coolDown.remove(message.author.id);
},86400000);
});
