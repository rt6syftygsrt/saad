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
client.user.setGame(`$help|welcome`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
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
    member.addRole(member.guild.roles.find("name","SMG"));
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




// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('تم عطاء ميوت صوتي')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> \n**By:** <@${userID}> \n**Channel:** \`\`🔊${voiceOld.voiceChannel.name}\`\``)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('تم فك ميوت صوتي')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}>\n**By:** <@${userID}> \n**Channel:** \`\`🔊${voiceOld.voiceChannel.name}\`\` `)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('تم عطاء سماعة')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> \n**By:** <@${userID}>\n**Channel:** \`\`🔊${voiceOld.voiceChannel.name}\`\``)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('تم فك سماعة')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> \n**By:** <@${userID}> \n**Channel:** \`\`🔊${voiceOld.voiceChannel.name}\`\` `)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('دخل الاروم')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`🔊${voiceNew.voiceChannel.name}\`\` \n**User:** ${voiceOld} `)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('خرج من روم')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`🔊${voiceOld.voiceChannel.name}\`\`\n**User:** ${voiceOld} `)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('لقد غير روم')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`🔊${voiceOld.voiceChannel.name}\`\` \n**To:** \`\`🔊${voiceNew.voiceChannel.name}\`\` \n**User:** ${voiceOld}`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});



const adminprefix = "-";
const developers = ['438371243801051141'];

console.log("Randy ");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : Randy`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`تم تغيير البلاينق الى   ${argresult}`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`تَم تغيير الواتشينق الى   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`تَم تغيير الليسينينق الى   ${argresult}`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   ${argresult}`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`جاري تغيير الأفتار... : `);
}
});




client.on('message', message => { 
    var prefix = "$";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "صلاحية") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**🚫انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done ✅  ***').then(msg => {msg.delete(10000)});
    }
    });






client.on('message', message => {

if (message.content.startsWith("$رول")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('? **لاتمتلك صلاحية كافية لعمل رول :rolling_eyes: **');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)

            })

}
});




client.on("message", message => {
    var prefix = "$"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "F5AmEh.bot" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(30000)});
                          }

     
});



const mmss = require('ms');
client.on('message', async message => {
let muteReason = message.content.split(" ").slice(3).join(" ");
let mutePerson = message.mentions.users.first();
let messageArray = message.content.split(" ");
let muteRole = message.guild.roles.find("name", "Muted");
let time = messageArray[2];
if(message.content.startsWith(prefix + "tempmute")) {
  if(!
('MUTE_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `MUTE_MEMBERS`' );
if(!mutePerson) return message.channel.send('**Mention Someone**')
if(mutePerson === message.author) return message.channel.send('**You Cant Mute Yourself**');
if(mutePerson === client.user) return message.channel.send('**You Cant Mute The Bot**');
if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**This Person Already Tempmuted !**');
if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
if(!time) return message.channel.send("**Type The Duration**");
if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
if(!muteReason) return message.channel.send('Please Type The Reason')
message.guild.member(mutePerson).addRole(muteRole);
message.channel.send(`**✅ ${mutePerson} has been muted ! 🤐 **`)
message.delete()
let muteEmbed = new Discord.RichEmbed()
.setTitle(`New Temp Muted User`)
.setThumbnail(message.guild.iconURL)
.addField('- Muted By:',message.author,true)
.addField('- Muted User:', `${mutePerson}`)
.addField('- Reason:',muteReason,true)
.addField('- Duration:',`${mmss(mmss(time), {long: true})}`)
.setFooter(message.author.username,message.author.avatarURL);
let incidentchannel = message.guild.channels.find(`name`, `incidents`);
if(!incidentchannel) return message.channel.send("Cant Find incidents Channel");
incidentchannel.sendEmbed(muteEmbed)
mutePerson.send(`**You Are has been temp muted in ${message.guild.name} reason: ${muteReason}**`)
.then(() => { setTimeout(() => {
message.guild.member(mutePerson).removeRole(muteRole);
}, mmss(time));
});
}
});




