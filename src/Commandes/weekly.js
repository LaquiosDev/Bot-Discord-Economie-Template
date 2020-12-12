const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 604800000 // 7 days in milliseconds, change if you'd like.
    let amount = 3000
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let weekly = await db.fetch(`weekly_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#d7342a")
        .setDescription(`<a:nocheck:745642064183558245> Tu as deja cocher la case de ton calendrier attend **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**`);
        message.channel.send(timeEmbed)

    } else {
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**Weekly Récompense**`)
    .addField(`<a:check:741676531029508216> Tu as collecté`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`weekly_${message.author.id}`, Date.now())
        
    }

}

module.exports.help = {
    name: "weekly"
}