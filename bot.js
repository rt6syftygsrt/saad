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




var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});







var Discord = require ( 'discord.js' ) ;
var client = new Discord. Client() ;
var prefix = "-" ; // ﺍﻟﺒﺮﻓﻜﺲ
var stopReacord = true;
var reactionRoles = [] ;
var definedReactionRole = null;
client. on( "message" , async message => {
const args = message. content . slice
( prefix. length) . trim() . split ( / +/ g ) ;
const command = args. shift
() . toLowerCase () ;
if( message. author . bot ) return ;
if( message. content . indexOf ( prefix) !== 0 ) return ;
if ( command == "autoc" ) {
if( ! message. channel . guild ) return message. reply ( ` *this ~command~ _for servers only_*` ) ;
if( ! message. member. hasPermission
( "ADMINISTRATOR" )) return message. channel . send( "sorry you can't do this" ) ;
if( ! args[ 0 ] || args[ 1 ]) return message. channel . send( `\`\`\`$ { prefix}
autoC < role- name> \`\`\`` ) ;
var role = message. guild . roles . find
( role => { return role. name == args
[ 0 ] }) ;
if( ! role) return message. channel . send( `no role with name $ { definedRoleName } found , make sure you entered correct name` ) ;
if( definedReactionRole != null
|| ! stopReacord ) return message. channel . send( "another reaction role request is running" ) ;
message. channel . send( `now go and add reaction in the message you want for role $ { role. name} ` ) ;
definedReactionRole = role;
stopReacord = false ;
}
})
client. on( 'raw' , raw => {
if ( ! [ 'MESSAGE_REACTION_ADD' ,
'MESSAGE_REACTION_REMOVE' ] . includes
( raw. t )) return;
var channel = client. channels . get
( raw. d . channel_id ) ;
if ( channel. messages . has
( raw. d . message_id )) return;
channel. fetchMessage
( raw. d . message_id ) . then( message => {
var reaction = message. reactions . get
( ( raw. d . emoji . id ? `$ { raw. d . emoji . name} : $ { raw. d . emoji . id} ` : raw. d . emoji . name ) ) ;
if ( raw. t === 'MESSAGE_REACTION_ADD' )
return client. emit( 'messageReactionAdd' , reaction, client. users . get
( raw. d . user_id )) ;
if ( raw. t ===
'MESSAGE_REACTION_REMOVE' ) return client. emit( 'messageReactionRemove' , reaction, client. users . get
( raw. d . user_id )) ;
}) ;
}) ;
client. on( 'messageReactionAdd' , ( reaction , user) => {
if( user. id == client. user. id) return;
if( ! stopReacord ) {
var done = false ;
reactionRoles [ reaction. message . id]
= { role: definedReactionRole , message_id : reaction. message . id, emoji : reaction. emoji } ;
stopReacord = true;
definedReactionRole = null;
reaction. message . react
( reaction. emoji . name)
. catch ( err => { done = true; reaction. message . channel . send( `sorry i can 't use this emoji but the reaction role done! anyone react will get the role!`)})
if(done) reaction.remove(user);
} else {
var request = reactionRoles[reaction.message.id];
if(!request) return;
if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
reaction.message.guild.members.get(user.id).addRole(request.role);
}
})
client.on(' messageReactionRemove ', (reaction, user) => {
if(user.id == client.user.id) return;
if(!stopReacord) return;
let request = reactionRoles[reaction.message.id];
if(!request) return;
reaction.message.guild.members.get(user.id).removeRole(request.role);
});
client.login("NTM5ODMxNTQwMzY5MzI2MTEw.DzMyWA.mkmAfwI0y2tYHPhtofbFt1yOtBw"); // ﺣﻂ ﺗﻮﻛﻦ ﺍﻟﺒﻮﺕ ﺩﺍﺧﻞ



