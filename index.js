const discord = require('discord.js');
const bot = new discord.Client();
const Discord = require('discord.js')
const db = require("quick.db")
const ms = require("ms")
const moment = require("moment")
 const superagent = require("superagent")

const pagination = require('discord.js-pagination');




// Grab the bot token from the .env file
const botToken = process.env.BOT_TOKEN;


bot.on('ready', () => {
bot.user.setActivity('/help', ({type: "WATCHING"}))
  
  
// What is the bot currently watching?
  
  console.log('Hello World! Logged in as ' + (bot.user.tag));

});



bot.on('message', msg => {
  
  // Prefix for commands

  const prefix = "/";

  // Keeps the bot from triggering commands from other bots
  if (msg.author.bot) return;
  
  // If a piece of text does not start with the prefix just ignore
  if (!msg.content.startsWith(prefix)) return;

  // Splits the command from the prefix
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  
  // Turns any upper case letters to lower case
  const command = args.shift().toLowerCase();
 

  
 
  
 
  
  
 //COUTNING 
  if (command === "1")
    msg.channel.send(`2`)
  
  
  //SPECOPPZ'S INVITE COMMAND
  if (command === "invite") { 
   
   
   
   
   
   
   
   
   msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=743991677387014144&permissions=8&scope=bot')
  
  
  
  }
  
  
  
   

  
  
  
  
  
  
  
  
  if (command === "3")
  
msg.channel.send(`Alright, I will say it. But No more for now, please. 4`)
  
  
  
  
  
  
  if (command === "version") {
  const embed = new Discord.MessageEmbed()
  .setTitle('3.5')
  msg.channel.send(embed)
  
  }
  
  
  




  
  
  
  if (command === "kiddions")
    msg.channel.send(`Hello. This menu is currently up!`)
  
  
  
  
  
  
  if (command === "suggestion")
    msg.channel.send(`**This command is being created, and will fully come soon. If you would like to suggest a command at this moment. DM my owner. SpecOppz#1731**`)

  
  

 if (command === 'random') {
        if(!args[0]) return msg.reply("You didn't specify args 1")
        if(!args[1]) return msg.reply("You didn't specify args 2")
        msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
    }

 
  
  
  
  
  
  
      if (command === 'clear' || command === 'purge'){
        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("**You can't use this command!**");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    if(command === 'kick'){
        if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("***You don't have permission to kick members.***");
        let toKick = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('**Please mention someone to kick**');
        if(!toKick) return msg.channel.send(`${args[0]} is not a member.`);
        if(!reason) return msg.channel.send('**Specify a reason.**');
 
        if(!toKick.kickable){
            return msg.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
        }
 
        if(toKick.kickable){
            let x = new Discord.MessageEmbed()
            .setTitle('Kick')
            .addField('Member Kicked', toKick)
            .addField('Kicked by', msg.author)
            .addField('Reason', reason)
            .addField('Date', msg.createdAt)
            .setColor('RANDOM');
 
            msg.channel.send(x);
            toKick.kick();
        }
    }
  
  
  
  
  
  
  
  
  
     if(command === 'ban'){
        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("You don't have permission to ban members.");
        let toBan = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('Please mention someone to bann');
        if(!toBan) return msg.channel.send(`${args[0]} is not a member.`);
        if(!reason) return msg.channel.send('Specify a reason.');
 
        if(!toBan.bannable){
            return msg.channel.send(':x: I cannot ban someone that is mod/admin. :x:');
        }
 
        if(toBan.bannable){
            let x = new Discord.MessageEmbed()
            .setTitle('Ban')
            .addField('Member Banned', toBan)
            .addField('Banned by', msg.author)
            .addField('Reason', reason)
            .addField('Date', msg.createdAt)
            .setColor('RAINBOW');
 
            msg.channel.send(x);
            toBan.ban();
        }
    }

 
  
  
  
  
  
  
  
   if (command === 'help'){
                msg.delete();
        let haste = args.slice(0).join(" ");
        if (args.length < 1){
         const embed = new Discord.MessageEmbed()
                .setDescription("`Prefix:` `/` `made by:` `SpecOppz` `Credits: SpecOppz#1731`")
                .setAuthor("𝕊ℙ𝔼ℂ𝕆ℙℙℤ ℍ𝔼𝕃ℙ")
                .setColor("#000000")
                .setThumbnail('https://media1.tenor.com/images/2c3a9bddb6fff6667c812c6ed57ad4d0/tenor.gif?itemid=16297708')
                .setTimestamp()
                .addField('𝔾𝔼ℕ𝔼ℝ𝔸𝕃', `${prefix}general - Shows all the General commands!`)
              .addField('𝕄𝕠𝕕𝕖𝕣𝕒𝕥𝕚𝕠𝕟', `${prefix}mods - Check out all the Moderation commands!`)     
             .addField('𝔽𝕦𝕟', `${prefix}fun - Look at all the fun commands!`) 
             .addField( '𝔸𝕓𝕠𝕦𝕥', `${prefix}about - Will tell you commands for SpecOppz and SpecOppz BOT v2!`)        
              .addField('𝕀ℕ𝔽𝕆', `${prefix}info - Shows the info about the bot/SpecOppz#1731`)
         .addField('ℝ𝔼𝕊ℙ𝔼ℂ𝕋 𝕌𝕊 𝔸ℕ𝔻 𝕀𝕊 𝔸𝕃𝕃 𝔽𝕀ℕ𝔼', '- SpecOppz#1731')
                .setFooter(msg.author.tag, msg.author.displayAvatarURL);
                msg.channel.send(embed).then(message => message.delete(240000));
  
  
  
        }
   }  
    
  
   
  
  
  
  
  
   if (command === 'h'){
                   msg.delete();
        let haste = args.slice(0).join(" ");
        if (args.length < 1){
         const embed = new Discord.MessageEmbed()
                .setDescription("`Prefix:` `/` `made by:` `SpecOppz` `Credits: SpecOppz#1731`")
                .setAuthor("𝕊ℙ𝔼ℂ𝕆ℙℙℤ ℍ𝔼𝕃ℙ")
                .setColor("#000000")
                .setThumbnail('https://media1.tenor.com/images/2c3a9bddb6fff6667c812c6ed57ad4d0/tenor.gif?itemid=16297708')
                .setTimestamp()
                .addField('𝔾𝔼ℕ𝔼ℝ𝔸𝕃', `${prefix}general - Shows all the General commands!`)
              .addField('𝕄𝕠𝕕𝕖𝕣𝕒𝕥𝕚𝕠𝕟', `${prefix}mods - Check out all the Moderation commands!`)     
             .addField('𝔽𝕦𝕟', `${prefix}fun - Look at all the fun commands!`) 
             .addField( '𝔸𝕓𝕠𝕦𝕥', `${prefix}about - Will tell you commands for SpecOppz and SpecOppz BOT v2!`)        
              .addField('𝕀ℕ𝔽𝕆', `${prefix}info - Shows the info about the bot/SpecOppz#1731`)
         .addField('ℝ𝔼𝕊ℙ𝔼ℂ𝕋 𝕌𝕊 𝔸ℕ𝔻 𝕀𝕊 𝔸𝕃𝕃 𝔽𝕀ℕ𝔼', '- SpecOppz#1731')
                .setFooter(msg.author.tag, msg.author.displayAvatarURL);
                msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
  
  
  
        }
   }  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  if (command === "v2") {      
   const embed = new Discord.MessageEmbed()
   .setTitle('About SpecOppz BOT v2!')
   .addField('ABOUT V2!', `**Hello. I am SpecOppz BOT v2. Some of you guys may know the other BOT which is names, SpecOppz BOT. I was created about nearly a 2-3 weeks ago. I was made by SpecOppz#1731 just for fun. But then, I turned into a project for him. If you wanna know more about me, DM my owner. @SpecOppz#1731!**`)
 .setColor('DARK BLUE')   
   msg.channel.send(embed);
    
  }
  
  
  

  
  
  
  





if (command === "general") { 
  const embed = new Discord.MessageEmbed()
  .setTitle('General Commands.')
  .addField('Commands', `***${prefix}help - Shows this message.   \n${prefix}h - Shows the help command.      \n${prefix}random - Shows a random number from <Args> to <args 2>      \n${prefix}ping - Shows the ping for the BOT!         \n${prefix}menus - Shows the detection status for free Mod Menus! \n${prefix}suggestion - Coming soon, but you can still use the command. If you wanna request something for the bot, Please DM @SpecOppz#1731             \n${prefix}kiddions -  A Mod Menus that everyone that plays GTA loves. It will shows the status for Kiddions Modest Menus, when you type the command. \n${prefix}changes - View the recent changes to the BOT! \n${prefix}version - View the latest version for the BOT! \n${prefix}invite - Invite this BOT to your server! \n${prefix}gcreate - Starts a giveaway! (STILL TESTING)***`)
  .setColor([127,229,240])
   msg.channel.send(embed);
  }



if (command === "mods") { 
  const embed = new Discord.MessageEmbed()
  .setTitle('Moderation Commands!')
  .addField('Moderation.', `***${prefix}ban - Take out all the anger they have caused and BAN THEM! \n${prefix}kick - Kick a member that is being mean from the server! \n${prefix}purge - Purge the chat. \n${prefix}clear - Clear the chat. \n${prefix}warn - Warns a user! \n${prefix}warnings - Shows the warnings of a user.***`)
  .setColor('RANDOM')
  msg.channel.send(embed);
}

  
  
  if (command === "fun") { 
   const embed = new Discord.MessageEmbed()
   .setTitle('Fun Commands!')
   .addField('Fun!', `${prefix}1 - Start counting! \n${prefix}poopon - Poop on someone! \n${prefix}slap - Slap someone! \n${prefix}8ball - Show your real questions.`)
   .setColor('RANDOM')
   .setTimestamp()
   msg.channel.send(embed);
  
  }







if (command === "about") { 
 const embed = new Discord.MessageEmbed()
 .setTitle('About The Bot/Owner!')
 .addField('About v2!', `**If you wanna know about SpecOppz\ 's BOT v2, type /v2**`)
 .addField('About SpecOppz', `**COMING SOON!**`)
 .setColor('RANDOM')
 msg.channel.send(embed);
}
  
  if (msg.content === `${prefix}name`) { 
    msg.channel.send(msg.guild.name);
  }
    
    

  
  
  











 if (command === 'react') { 
 msg.react('🔵');
 
   
   
 }

if (command === 'kystterr') { 
   msg.delete();
   const embed = new Discord.MessageEmbed()
   
  .setTitle('What It Do Kystterr Crew?')
  .addField('🔵Kystterr🔵', `Coming Soon!`)
  .setColor('DARK BLUE')
   .setFooter(msg.author.tag, msg.author.displayAvatarURL);
  msg.channel.send(embed).then(message => message.delete(5000));
  

  
  
  msg.react('😈');
  msg.react('🔵');
  msg.react('❤')
  msg.react('🆒')
  
  
  
  
  
  
  
  
  }
  
  
  
  

  







 
  
  


    
    
      

  
  
  
  
  
  
  
  

          
  
  
       
    

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  if (command === 'slap') { 
    let user = msg.mentions.users.first()
  if (!user) return msg.reply('Please mention someone you would like to slap!')
msg.reply('Good slap!')
    msg.channel.send
    msg.react('✅')
  msg.channel.send('https://tenor.com/view/slap-bears-gif-10422113')
  
  
  }
  
  
  

  
  
  
  
  
  if (command === 'youtube') { 
    const embed = new Discord.MessageEmbed()
    
    .setAuthor('SpecOppz YouTube')
    .setDescription('SpecOppz#1731 YouTube channel!')
  .addField('Go check out SpecOppz on YouTube!', `https://www.youtube.com/channel/UCiG9IEDjRwpHfnMFXuV4CzQ?view_as=subs`)
    .setImage('https://yt3.ggpht.com/a-/AOh14GjKS52qui4Pw8kFflEJx0nIID9XWi4lcPropYmrTA=s100-c-k-c0xffffffff-no-rj-mo')
    .setImage('https://yt3.ggpht.com/a-/AOh14GjKS52qui4Pw8kFflEJx0nIID9XWi4lcPropYmrTA=s100-c-k-c0xffffffff-no-rj-mo')
    .setTimestamp()
   .setColor('LIGHT RED')
    .setFooter(msg.author.tag, msg.author.displayAvatarURL);
   
    msg.react('✅')
    msg.channel.send(embed);
  
  
    
    
    
    
   }
    
  
  
  
  
  
  
  if (command === 'info') { 
  const embed = new Discord.MessageEmbed()
  
  .setAuthor('𝕀ℕ𝔽𝕆')
  .setDescription('Info about SpecOppz#1731/Bot')
  .setTimestamp()
  .addField('Info', `${prefix}info - Shows the info about the bot/SpecOppz#1731 \n${prefix}av - Shows the avatar of the mentioned user! \n${prefix}userinfo - Shows the info of a user that was mentioned! \n${prefix}serverinfo - Shows the server statistics/info about it. \n${prefix}covid - Shows the cases/deaths/etc about covid-19.`)
  .addField('GTA V', `{prefix}outfits - Look at some of the best/good outfits submitted!`)
  .setColor('DARK BLUE')
  .setFooter(msg.author.tag, msg.author.displayAvatarURL);
   
    msg.react('✅')
 msg.channel.send(embed); 
  }  
  
  
  

  
  
  
  
  
  
  if (command === 'helpp') { 
   msg.react('❌')
    msg.react('⭕')
    const embed = new Discord.MessageEmbed()
  .setAuthor('WRONG USUAGE! PLEASE USE /help OR /h')
    .setTimestamp()
    .setFooter(msg.author.tag, msg.author.displayAvatarURL)
    .setImage(msg.author.displayAvatarURL)
   .setColor('RED')
    msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
  
  

    }




  
  
  
  if (command === 'av') { 
  msg.delete()
    let user = msg.mentions.users.first() || msg.author
  
    
    let embed = new Discord.MessageEmbed()
 
      .setTitle(`${user.tag}'s avatar`)
  .setImage(user.displayAvatarURL({dynamic: true, size: 2048}))
  .setFooter(`Requested by ${msg.author}`)
    .setDescription('Command used: /av (This message doesn\'t Get deleted.)')
     .setColor('BLACK')
   .setTimestamp()
      msg.channel.send(embed).then(m => m.delete({ timeout: 25000 }));
     msg.react('✅')
  }
  
  
  
  
  



if (command === '123') { 
msg.react('⭕')
msg.channel.send('1234')
}
  
  
  
  
  

  
  
  
  
    if (command === "userinfo"){
        msg.delete();
        let user;

    if (msg.mentions.users.first()) {
         user = msg.mentions.users.first();
    } else {
         user = msg.author;
     }

     const member = msg.guild.member(user);

     const embed = new Discord.MessageEmbed() 
        .setColor('#000000')
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField('ID:', `${user.id}`, true)
        .addField('Nickname:', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField('Created at:', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Joined server:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Status:', `${user.presence.status}`, true)
        .addField('Game:', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        
        .setFooter(`Replying to ${msg.author.username}#${msg.author.discriminator}`)
    msg.channel.send({embed}).then(message => message.delete(15000));

}
  
  

  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 if (command === 'serverinfo') { 

let region;
        switch (msg.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new Discord.MessageEmbed()


        
        
        
        
        
        .setThumbnail(msg.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${msg.guild.name} server stats`)
            .addFields(
                {
                    name: "Owner: ",
                    value: msg.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Members: ",
                    value: `There are ${msg.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "Members Online: ",
                    value: `There are ${msg.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                    inline: true
                },
                {
                    name: "Total Bots: ",
                    value: `There are ${msg.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Creation Date: ",
                    value: msg.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles Count: ",
                    value: `There are ${msg.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verified: `,
                    value: msg.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: msg.guild.premiumSubscriptionCount >= 1 ? `There are ${msg.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: msg.guild.emojis.cache.size >= 1 ? `There are ${msg.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                }
            )
         msg.channel.send(embed)
    
}

       

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (command === 'specoppz') { 
    const embed = new Discord.MessageEmbed()
 .setTitle('test')
    .setThumbnail(msg.guild.iconURL({dynamic : true}))
 .setTimestamp() 
  msg.react('✅')
  msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
  
  
    }
  
  
  
  
  
  
  
  
  
  
  if (command === 'setnick') { 
                                                 
let perm = msg.member.hasPermission("MANAGE_NICKNAMES")
    if(!perm) return msg.channel.send("No perms")
    
  let user = msg.mentions.members.first()
  if(!user) return msg.channel.send("Mention a user!")
    
    let name = args.slice(1).join(" ")
    if(!name) return msg.channel.send("Name is needed")
    
    user.setNickname(name)
    
    msg.channel.send(`${user.user.tag}'s name have changed to ${name}`)
  
  }
                             
    


  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (command === 'warn') { 
  
 let user;
   if(!args[0]) user = msg.author
   if(args[0] && isNaN(args[0])) user = msg.mentions.users.first()
   if(args[0] && !isNaN(args[0])){
       user = bot.users.cache.get(args[0])

       if(!msg.guild.members.cache.has(args[0])) return msg.reply(":x: User not found.")

   }
   
   if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply(":x: You don't have the required permissions")

   //LETS GO

if(msg.guild.members.cache.get(user.id).roles.highest.position > msg.member.roles.highest.position) return msg.reply(":x: Can't warn")
   if(!user) return msg.reply(":x: You must tag a user")

   let res = args.slice(1).join(" ")

   

   msg.react('✅')
   
    db.push(`info.${user.id}`,{moderator:msg.author.tag , reason:res ? res : "N/A" , date:moment().format("YYYY-MM-DD")})
   db.add(`number.${user.id}.${msg.guild.id}`,1)
   user.send(`You were **warned** in **${msg.guild.name}!** \n **Reason:**\`${res ? res : "N/A"}\``)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}

exports.help = {
    name:"warn",
    description:"Warn users",
    usage:"warn @user reason / warn userID reason",
    category:"moderation"
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (command === 'warnings') { 
  
  
let user;
    if(!args[0]) user = msg.author
    if(args[0] && isNaN(args[0])) user = msg.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = bot.users.cache.get(args[0])
 if(!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply(":x: You don't have the required permissions")
        if(!msg.guild.members.cache.has(args[0])) return msg.reply(":x: User not found.")
 
    }
    if(!user) return msg.reply(":x: You must tag a user")

    const number = db.fetch(`number.${user.id}`)
    const warnInfo = db.fetch(`info.${user.id}`)

if(!number || !warnInfo) return msg.reply("Doesn't have warn")
const warnembed = new Discord.MessageEmbed()

for(let warnings of warnInfo){
    let mod = warnings.moderator
    let reason = warnings.reason
    let date = warnings.date

warnembed.addField(`${user.tag} warns`,`**Moderator:**${mod} \n Reason:${reason} \n Date:${date}`,true)
}
warnembed.setColor(msg.guild.members.cache.get(user.id).roles.highest.color)

msg.channel.send(warnembed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}

exports.help = {
    name:"warns",
    description:"Look Warns users",
    usage:"warns @user / warns userID",
    category:"moderation"
}
  
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
    if (command === 'bans') { 
  msg.delete()
  if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.reply(":x: You don't have the required permissions")
  
 
        msg.guild.fetchBans().then(bans => {
            msg.channel.send(`${bans.size} Bans in this server!`).then(m => m.delete({ timeout: 5000 }));
        })

    }


  
  
  
  
  
  
 




  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (command === 'invites') { 
    const { guild } = msg
    guild.fetchInvites().then((invites) => {
      const inviteCounter = {
        bob: 19,
        joe: 30,
      }

      invites.forEach((invite) => {
        const { uses, inviter } = invite
        const { username, discriminator } = inviter

        const name = `${username}#${discriminator}`

        inviteCounter[name] = (inviteCounter[name] || 0) + uses
      })

      let replyText = 'Invites:'

      const sortedInvites = Object.keys(inviteCounter).sort(
        (a, b) => inviteCounter[b] - inviteCounter[a]
      )

      console.log(sortedInvites)

      sortedInvites.length = 3

      for (const invite of sortedInvites) {
        const count = inviteCounter[invite]
        replyText += `\n${invite} has invited ${count} member(s)!`
      }

      msg.reply(replyText)
    })
  }

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  if (command === '8ball') { 
   let args = msg.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) return msg.reply('You need to specify a question!');
        else {
            let answers = [
            'Yes',
            'No',
            'Maybe',
            'Of course!',
            'I don\'t know...',
            '223 Came with the scope...',
            'Just stop..臘', 
            'Don\'t make me show you real gangster!',
            'Bot Porn',
            '6ix9ine is bad!'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('8ball')
                .setColor(0x3d32fc)
                .addField('Question: ', question)
                .addField('Answer: ', response);
            msg.channel.send(embed);

        }
    }

  
  
  
  
  
  
  
  if (command === 'specbot') { 
  let args = msg.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) return msg.reply('You need to specify a question for SpecOppz BOT!');
        else {
            let answers = [
            'Yes', 
            'He is an alright bot', 
            'See, SpecOppz BOT is not good compared to me!',
            'No he is bad!'
];
  let response = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.MessageEmbed()
  .setTitle('SpecOppz BOT 8ball😈')
  .addField('Question', question)
  .addField('Answer: ', response);
  msg.channel.send(embed);
          
  }

  }
  
  
  
  
  
  
  
  

  
  
  


  
  
    
   if (command === "ip"){
       msg.delete();
       let haste = args.slice(0).join(" ");
       if (args.length < 1) return msg.edit("`Please enter a valid IP address`").then(message => message.delete(3000));
       let embed = new Discord.MessageEmbed()
       .setAuthor("IP-Location", "https://icon2.kisspng.com/20180524/th/kisspng-reticle-clip-art-sight-5b06925b8cc646.5048681515271573395766.jpg")
       .setDescription("https://www.infosniper.net/index.php?ip_address=" + haste + "&k=&lang=1")
       .setColor("#000000");
       msg.channel.send(embed).then(message => message.delete(15000));
   }
  
  
  
  
  
  
  
   if (command === "year"){
       msg.delete();

	let now = new Date();
	let next = new Date(now);
	next.setFullYear(now.getFullYear() + 1);
	next.setHours(0, 0, 0, 0);
	next.setMonth(0, 1);
	let duration = next - now;
	let seconds = Math.floor((duration / 1000) % 60);
	let minutes = Math.floor((duration / 1000 / 60) % 60);
	let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Next Year!", msg.author.displayAvatarURL)
    .setColor("#000000")
    .setDescription(`There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**!`)
    .setFooter(`Or, in short, ${moment.duration(next - now).humanize()}.`)
    msg.channel.send(embed).then(message => message.delete(15000));
   }
  
  

  
  
  
  
  
  
  
  
  if (command === 'selfbot') { 
  
  const embed = new Discord.MessageEmbed()
  
  .setTitle('Please choose a Discord selfbot.')
  .setDescription('Discord Selfbots we choose.')
  .addField('Choose.', `${prefix}lucifer - Look at the Lucifer selfbot. \n${prefix}Dark - Look at the Lucifer selfbot. \n${prefix}Suck - Shows the Suck selfbot.`)
 msg.channel.send(embed)
  
  
  }
  
  
  
  
  
  
  if (command === 'lucifer') { 
  const embed = new Discord.MessageEmbed()
  .setTitle('Soon, same with the other selfbots.')
  msg.channel.send(embed)
  
  }
  
  
  
  
  if(command === 'ping') {
        msg.channel.send("Pinging...").then(m =>{
            var ping = m.createdTimestamp - msg.createdTimestamp;
            var botPing = Math.round(bot.pi);

            m.edit(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms`);
        });
    }
  
  
  
  if (command === "restart") {
       msg.channel.send("`⚠️ Restarting...`").then(message => message.delete(1000));
         msg.channel.send("`✅ Restart complete.`").then(message => message.delete(3000));
         process.exit();
      };










if (command === 'menus') { 
msg.delete()
  const embed = new Discord.MessageEmbed()
.setTitle('Menu Detection Status.')
.addField('FREE MENUS:', `2Take1Free -> Outdated:x:
DiaMenu 1.5 -> Outdated:x:
Dukk1ware -> Outdated:x:
GTAHaX -> Unknown :x:
Kiddion's Modest Menu -> Undetected :white_check_mark:
Kiddion's Ped Dropper -> Undetected :white_check_mark:
Onizuka Lite -> Unknown :x:
ComMods 1.2 -> Detected :x:
BR!NT 5.3 -> Detected :x:
ComMods 2.0 -> Detetcted :x:
L0yy 1.3 -> Detected :x:
Marsbar -> Detected :x:
Midgxt 1.0 -> Detected :x:
OAM -> Detected :x:
Raptor 1.0 -> Detected :x:
Sentex -> Detected :x:
Shadow -> Detected :x:
Slay 1.5.1 -> Detected :x:
Sqezze -> Detected :x:
Sylent -> Detected :x:
Terror 1.6 -> Unknown :x:
Vector -> Detected :x:
X-Furious -> Detected :x:
iVritex Menu 1.2.3 -> Detected :x:
Clipox 0.1.3 -> Detected :x:
Omega 1.2 -> Unknown :x:
Veni Vidi Vici 1.5.6 -> Unknown :x:
MaverickCheats External -> Unknown :x:
`)
.addField('RECOMMENDED PAID MENUS:', `2Take1 -> Undetected :white_check_mark:
Delusion -> Unknown :x:
Disturbed -> Undetected :white_check_mark:
Ephemeral -> Unknown :x:
Ilusion Engine -> Undetected :white_check_mark:
Impulse -> Undetected :white_check_mark:
Luna -> Undetected :white_check_mark:
Onizuka -> Unknown :x:
Paragon -> Undetected :white_check_mark:
Phantom X -> Offline :x:
Robust -> Unknown :x:
Tactical -> Undetected :white_check_mark:
Over -> Unknown :x:
Conqueror -> Unknown :x:`)
.addField('RED DEAD ONLINE MENUS:', `Paragon RDR2 -> Undetected :white_check_mark:
Ozark RDR2 -> Undetected :white_check_mark:
`) 
.addField('CHANGELOG:', `- GTA 1.52 Update \n - Luna status. \n - ComMods Status.`)  
 .setColor('RED')
  .setTimestamp() 
  .setFooter(msg.author.tag, msg.author.displayAvatarURL)
  msg.channel.send(embed)
  }



if (command === 'start') { 

 msg.channel.send("`🟠Turing on...`").then(message => message.delete(1000));
 msg.channel.send("`✅SpecOppz Selfbot turned on.`").then(message => message.delete(3000));
 process.exit();

};



  
  
  
  
  
        if (command === "slap1") {
  
      let user = msg.mentions.users.first()
      const {body} = superagent
      .get(`https://nekos.life/api/v2/img/slap`);
      if(!user) return msg.reply('You forgot to mention a user.')
      msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author.tag} SLAP ${user.tag}`).setColor("#000000").setImage(body.url)).then(message => message.delete(6100));    
}
  
  
  if (command === 'kill') { 
let user = msg.mentions.users.first()
  if (!user) return msg.reply('Please mention someone you would like to kill!')
msg.reply('Cold blooded MURDERER!!')
    msg.channel.send('https://tenor.com/view/kill-yourself-killing-me-smalls-bowing-godfather-xoxo-gif-13754720')
  
  }
  
  
  
  
  
  
  
  
  
  
  if (command === 'slaps') { 
  const embed = new Discord.MessageEmbed()
  .setTitle('The Story Of Slaps.')
  .setDescription('*Hello. Slaps was someone that 1v1\'ed SpecOppz#1731. Slaps lost really bad, he missed lots of shots. It was just horrific. He got maybe, 2 kills. That was because SpecOppz was standing still. SpecOppz got around 13 kills, then orbed him!! So, SpecOppz won.* ')
  msg.channel.send(embed)
  
  }
  
  
  
  
  
  
  
  if (command === 'outfits') { 
const embed = new Discord.MessageEmbed()
.setTitle('Choose an outfit!')
.setDescription('**If you want the outfit credits, type /credits.**')
.addField('Outfit #1', `**Use command /outfit#1`)
.addField('Outfit #2', `Not yet!`)

msg.channel.send(embed)

}
  
  
  
  
  if (command === 'credits') { 
  const embed = new Discord.MessageEmbed()
  .setTitle('Outfit credits.')
  .addField('Outfit #1', `No author yet.`)
  msg.channel.send(embed)
  
  
  
  }
  
  
  
  
  
  
  
  
  
  
  if (command === 'depressed') { 
  const embed = new Discord.MessageEmbed()
  .setTitle('ogniggachu can\'t get no woman..')
  msg.channel.send(embed)
  }
  
  
  

  if (command === 'online') { 
  msg.delete()
    const embed = new Discord.MessageEmbed()
  .setTitle('I\'M BACK ONLINE BITCHES')
  .setImage('https://cdn.discordapp.com/avatars/743991677387014144/7e47650a2c7dccff6ed476afebd81a1a.webp?size=2048')
  .setTimestamp()
  msg.channel.send(embed)
  }
  
  
  
  
  
  
  
  if (command === 'bal') { 
let user = msg.mentions.members.first() || msg.author //Searching for the user

 let money = db.fetch(`money_${msg.guild.id}_${user.id}`)
 
 if(money === null) money = 0 
    
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${user.username}'s balance`)
    .setDescription(`${user} has ${money}$`)
    msg.channel.send(embed) //Making it send the embed
    }
   
  

   



  
});
bot.login("NzQzOTkxNjc3Mzg3MDE0MTQ0.XzcuPg.DOjqpe3AmLumITTSNNf03_53umE")
  
  
  
  
  
  
  
  
  
