const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NTM5ODMxNTQwMzY5MzI2MTEw.DzOHyw.BzPFCaO1ewvsxRNGhKPvboCEyS8'); 


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





client.on("message", (message) => {
                        if (message.content.startsWith("ch")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                            message.channel.sendMessage('تـم إنـشاء روم كتابي')
                            
                        }
                        });



client.on("message", (message) => {
                        if (message.content.startsWith("cv")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('تـم إنـشاء روم صـوتي')
                            
                        }
                        });









var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});





client.on('message', message => {
    var prefix = "$";
     if(message.content === prefix + "mu") {
     if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
                    
    }).then(() => {
             message.reply("**__تم تقفيل الشات__ ✅ **")
       });
    }
    if(message.content === prefix + "un") {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
                    
         }).then(() => {
          message.reply("**__تم فتح الشات__✅**")
      });
  }
                           
});





client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}ban`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Banned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("BLACK")
        .setFooter(` `)
        p.ban();
            message.delete();
        log.send({embed});
    }
});






client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
   msg.reply('وعليكم سلام ورحمة الله  منور يا قلب :heart:  ');
  }
});





client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","smg"));
    });







client.on('message' , async (message) => {
var prefix = "$"
    if(message.content.startsWith(prefix + "topinv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
     //معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
   



client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.split(' ')[0] == `${prefix}لون`){
            const embedd = new Discord.RichEmbed()
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
            .setColor(`ff0000`)
           
            if(!isNaN(args) && args.length > 0)
           
           
            if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
            var a = message.guild.roles.find("name",`${args}`)
             if(!a)return;
            const embed = new Discord.RichEmbed()
           
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**Done , تم تغير لونك . ✅ **`)
           
            .setColor(`${a.hexColor}`)
            message.channel.sendEmbed(embed);
            if (!args)return;
            setInterval(function(){})
               let count = 0;
               let ecount = 0;
            for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("bot",`${x}`))
           
            }
             message.member.addRole(message.guild.roles.find("bot",`${args}`));
           
           
            }
            });









client.on('message', message => {
    if(message.content.toLowerCase().startsWith(`discord.gg`)){
        message.member.addRole(message.guild.roles.find('name', 'Muted'));
        var embed = new Discord.RichEmbed()
        .setDescription(`تمت معاقبتك لنشرك سيرفر اخر هنا`)
            message.delete();
        message.channel.send(`<@${message.author.id}`);
        message.channel.send({embed});
    }
});







client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })



client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('smg', '・text');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});



client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}تحذير`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Warned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("WHITE")
        .setFooter(` `)
        message.channel.send(`${p} ${reason}`)
            message.delete();
        log.send({embed});
    }
});







client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`:white_check_mark: <@${usermentioned}> Moved. `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});



 const logs = require('./logs.json');
let fs = require('fs');
client.on("message", message => {
let args = message.content.split(" ");
let prefix = " $ ";
if(args[0].toLowerCase() === (prefix + "setlog")){
if(!message.member.hasPermission('ADMINISTRATOR')){
return message.channel.send(` ﺍﻧﺖ ﻻ ﺗﻤﻠﻚ ﺻﻼﺣﻴﺎﺕ ﻛﺎﻓﻴﺔ ﻟﺘﺠﻌﻠﻚ ﺗﻔﻌﻞ ﻫﺬﺍ ﺍﻻﻣﺮ `);
}
if(args[1] === logs[message.guild.id].logchannel){
return message.channel.send(` ﺍﻥ ﺍﻟﻠﻮﺝ ﺑﺎﻟﻔﻌﻞ ﻓﻲ ﺗﻠﻚ ﺍﻟﺮﻭﻡ `);
}
if(!args[1]){
return message.channel.send(` ﻳﺠﺐ ﺍﻧﺖ ﺗﻀﻊ ﺍﻱ ﺩﻱ ﺭﻭﻡ ﺣﻘﻴﻘﻲ ﻭﺇﻻ ﺍﻻﻣﺮ ﻟﻦ ﻳﻌﻤﻞ `);
}
logs[message.guild.id] = {logchannel: args[1]};
message.channel.send(` ﺗﻢ ﺑﻨﺠﺎﺡ ﺗﻐﻴﻴﺮ ﺭﻭﻡ ﺍﻟﻠﻮﺝ ! `);
}
fs.writeFileSync('./logs.json', JSON.stringify(logs, null, 4));
});
client.on("messageDelete", async message => {
const fff = {
logsss: `${logs[message.guild.id].logchannel}`
};
if(!logs[message.guild.id].logchannel) return;
if(message.author.bot) return;
if(message.channel.type === "dm") return;
let messageEmbed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
.setTimestamp()
.setDescription(`🗑 Message sent by ${message.author} deleted in ${message.channel}
\`\`\` ${message} \`\`\` `)
.setColor("#00000")
.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`);
client.channels.get(fff.logsss).send(messageEmbed);
});
client.on("messageUpdate", async (oldMessage, newMessage) => {
if(oldMessage.author.bot) return;
const ff = {
logss: `${logs[oldMessage.guild.id].logchannel}`
};
if(!logs[oldMessage.guild.id].logchannel) return;
if(oldMessage.channel.type === "dm") return;
// let messageupdatechannel = oldMessage.guild.channels.find(`name`, "logs");
let messageupdateEmbed = new Discord.RichEmbed()
.setAuthor(`${oldMessage.author.tag}`, `${oldMessage.author.displayAvatarURL}`)
.setDescription(`✏ Message sent by <@${oldMessage.author.id}> edited in ${oldMessage.channel}
Old:
\`\`\` ${oldMessage} \`\`\`
New:
\`\`\` ${newMessage} \`\`\` `)
.setColor(`#00000`)
.setTimestamp()
.setFooter(`${oldMessage.author.tag}`, `${oldMessage.author.displayAvatarURL}`);
client.channels.get(ff.logss).send(messageupdateEmbed);
});
client.on('channelDelete', channel => {
const ffff = {
logssss: `${logs[channel.guild.id].logchannel}`
};
if(!logs[channel.guild.id].logchannel) return;
let dEmbed = new Discord.RichEmbed();
dEmbed.setDescription(`${channel.name} has been deleted ${client.emojis.find(r => r.name === 'Warn')}`);
dEmbed.setColor("#00000");
dEmbed.setFooter(channel.guild.name,channel.guild.iconURL);
dEmbed.setTimestamp();
client.channels.get(ffff.logssss).send(dEmbed);
});
client.on('channelCreate', channel => {
const fffff = {
logsssss: `${logs[channel.guild.id].logchannel}`
};
if(!logs[channel.guild.id].logchannel) return;
let dEmbed = new Discord.RichEmbed();
dEmbed.setDescription(`${channel.name} has been created ${client.emojis.find(r => r.name === 'Warn')}`);
dEmbed.setColor("#00000");
dEmbed.setFooter(channel.guild.name,channel.guild.iconURL);
dEmbed.setTimestamp();
client.channels.get(fffff.logsssss).send(dEmbed);
});
client.on("guildBanAdd", (guild, member) => {
const awwaior = {
channel: `${logs[guild.id].logchannel}`
};
client.setTimeout(() => {
guild.fetchAuditLogs({
limit: 1,
type: 22
})
.then(audit => {
let exec = audit.entries.map(a => a.executor.username);
try {
// let log = guild.channels.find(`name`, "logs");
// if(!log) return member.channel.send("Make a channel named logs.");
client.fetchUser(member.id).then(myUser => {
let Banninglolembed = new Discord.RichEmbed()
.setAuthor(exec)
.setThumbnail(myUser.avatarURL)
.addField('Banned user : ', `**${myUser.tag }**`, true)
.addField('Banned by: ', `${exec}`, true)
.setTimestamp()
.setColor(`#00000`);
client.channels.get(awwaior.channel).send(Banninglolembed).catch(e => {
console.log(e);
});
});
}catch (e) {
console.log(e);
}
});
}, 1000);
});
client.on('guildMemberAdd', member => {
let fsfssfsf = {
channel: `${logs[member.guild.id].logchannel}`
};
let fsf = new Discord.RichEmbed();
fsf.setTimestamp();
fsf.setColor('#056320');
fsf.setThumbnail(member.user.displayAvatarURL);
fsf.addField(` ﻋﺪﺩ ﺍﻋﻀﺎﺀ ﺍﻟﺴﻴﺮﻓﺮ ﺍﻷﻥ ﺍﺻﺒﺢ : `,member.guild.members.size);
fsf.addField(` ﺗﺎﺭﻳﺦ ﺩﺧﻮﻟﺔ ﺍﻟﺪﻳﺴﻜﻮﺭﺩ :`, `\`${moment(member.user.createdAt).format('D/M/YYYY h:m A')}\` \n**${moment(member.user.createdAt).locale("AR-eg").fromNow()}**`, true);
client.channels.get(fsfssfsf.channel).send(fsf);
});
client.on('guildMemberRemove', member => {
let fsfsssfsf = {
channel: `${logs[member.guild.id].logchannel}`
};
let fsff = new Discord.RichEmbed();
fsff.setTimestamp();
fsff.setColor('#bc1010');
fsff.setThumbnail(member.user.displayAvatarURL);
fsff.addField(` ﻋﺪﺩ ﺍﻋﻀﺎﺀ ﺍﻟﺴﻴﺮﻓﺮ ﺍﻷﻥ ﺍﺻﺒﺢ : `,member.guild.members.size);
client.channels.get(fsfsssfsf.channel).send(fsff);
});
//codes
