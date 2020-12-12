const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#d7342a")
        .setDescription(`<a:nocheck:745642064183558245> Tu as deja travailler recemment, repose toi et attend ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Developpeur','Graphiste','Mécanicien','Maçon','Chef','Policier']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 200) + 50;

        let embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:check:741676531029508216> Paie reçue ! Tu as travaillé en tant que **__${replies[result]}__** et tu as gagné : __**${amount}€**__`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name: "work"
}