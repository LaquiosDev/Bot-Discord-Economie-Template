const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 1000
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#d7342a")
        .setDescription(`<a:nocheck:745642064183558245> Tu as deja cocher la case de ton calendrier aujourd'hui attend **${time.hours}h ${time.minutes}m ${time.seconds}s**!`);
        message.channel.send(timeEmbed)

    } else {

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Recompense du jour`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .addField(`<a:check:741676531029508216> Tu as collectés : `, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}

module.exports.help = {
    name: "daily"
}