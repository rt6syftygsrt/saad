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
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
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






const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
client.on('message', message => {
if (!message.channel.guild) return;
let room = message.content.split(" ").slice(1);
let findroom = message.guild.channels.find('pax', `${room}`)
if(message.content.startsWith(prefix + "setWelcomer")) {
if(!message.channel.guild) return message.reply('*This Command Only For Servers*');
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('*Sorry But You Dont Have Permission* `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('*Done The Welcome Code Has Been Setup*')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
}})
client.on('message', message => {
if(message.content.startsWith(prefix + "toggleWelcome")) {
if(!message.channel.guild) return message.reply('*This Command Only For Servers*');
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('*Sorry But You Dont Have Permission* `MANAGE_GUILD`' );
if(!welcome[message.guild.id]) welcome[message.guild.id] = {
onoff: 'Off'
}
if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`*The Welcome Is _𝐎𝐍_ !*`), welcome[message.guild.id].onoff = 'On']
if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`*The Welcome Is _𝐎𝐅𝐅_ !*`), welcome[message.guild.id].onoff = 'Off']
fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
})
}
})
client.on('message', message => {
if(message.content.startsWith(prefix + "toggleDmwelcome")) {
if(!message.channel.guild) return message.reply('*This Command Only For Servers*');
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('*Sorry But You Dont Have Permission* `MANAGE_GUILD`' );
if(!welcome[message.guild.id]) welcome[message.guild.id] = {
dm: 'Off'
}
if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`*The Welcome Dm Is _𝐎𝐍_ !*`), welcome[message.guild.id].dm = 'On']
if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`*The Welcome Dm Is _𝐎𝐅𝐅_ !*`), welcome[message.guild.id].dm = 'Off']
fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
})
}
})
client.on('message', message => {
if(message.content.startsWith(prefix + "toggleInvitedby")) {
if(!message.channel.guild) return message.reply('*This Command Only For Servers*');
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('*Sorry But You Dont Have Permission* `MANAGE_GUILD`' );
if(!welcome[message.guild.id]) welcome[message.guild.id] = {
by: 'Off'
}
if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`*The Invited By Is _𝐎𝐍_ !*`), welcome[message.guild.id].by = 'On']
if(welcome[message.guild.id].by === 'On') return [message.channel.send(`*The Invited By Is _𝐎𝐅𝐅_ !*`), welcome[message.guild.id].by = 'Off']
fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
})
}
})
client.on("guildMemberAdd", member => {
if(!welcome[member.guild.id]) welcome[member.guild.id] = {
onoff: 'Off'
}
if(welcome[member.guild.id].onoff === 'Off') return;
let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
let memberavatar = member.user.avatarURL
if (!welcomer) return;
if(welcomer) {
moment.locale('ar-ly');
var h = member.user;
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(h.avatarURL)
.setAuthor(h.username,h.avatarURL)
.addField(': ﺗﺎﺭﻳﺦ ﺩﺧﻮﻟﻚ ﺍﻟﺪﺳﻜﻮﺭﺩ ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} *\n* \`${moment(member.user.createdAt).fromNow()}\``,true)
.setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
welcomer.send({embed:heroo});
}})
client.on('guildMemberAdd',async member => {
if(!welcome[member.guild.id]) welcome[member.guild.id] = {
onoff: 'Off'
}
if(welcome[member.guild.id].onoff === 'Off') return;
const Canvas = require('canvas');
const jimp = require('jimp');
const w = ['./welcome_4.png'];
let Image = Canvas.Image,
canvas = new Canvas(800, 300),
ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.stroke();
ctx.beginPath();
fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
if (err) return console.log(err);
let BG = Canvas.Image;
let ground = new Image;
ground.src = Background;
ctx.drawImage(ground, 0, 0, 800, 300);
})
let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
jimp.read(url, (err, ava) => {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
if (err) return console.log(err);
ctx.font = '36px Arial';
ctx.fontSize = '72px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(member.user.username, 545, 177);
ctx.font = '16px Arial Bold';
ctx.fontSize = '72px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
let Avatar = Canvas.Image;
let ava = new Avatar;
ava.src = buf;
ctx.beginPath();
ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
ctx.drawImage(ava, 36, 21, 260, 260);
let c = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
if(!c) return;
c.sendFile(canvas.toBuffer());
});
});
});
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
wait(1000);
client.guilds.forEach(g => {
g.fetchInvites().then(guildInvites => {
invites[g.id] = guildInvites;
});
});
});
client.on('guildMemberAdd', member => {
if(!welcome[member.guild.id]) welcome[member.guild.id] = {
by: 'Off'
}
if(welcome[member.guild.id].by === 'Off') return;
member.guild.fetchInvites().then(guildInvites => {
const ei = invites[member.guild.id];
invites[member.guild.id] = guildInvites;
const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
const inviter = client.users.get(invite.inviter.id);
const logChannel = member.guild.channels.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
if(!logChannel) return;
setTimeout(() => {
logChannel.send(`Invited By: <@${inviter.id}>`);
},2000)
});
});
client.on("guildMemberAdd", member => {
if(!welcome[member.guild.id]) welcome[member.guild.id] = {
dm: 'Off'
}
if(welcome[member.guild.id].dm === 'Off') return;
member.createDM().then(function (channel) {
return channel.send(`:rose: ﻭﻟﻜﻢ ﻧﻮﺭﺕ ﺍﻟﺴﻴﺮﻓﺮ :rose:
:crown: ﺍﺳﻢ ﺍﻟﻌﻀﻮ ${member}:crown:
ﺍﻧﺖ ﺍﻟﻌﻀﻮ ﺭﻗﻢ ${member.guild.memberCount} `)
}).catch(console.error)
})
