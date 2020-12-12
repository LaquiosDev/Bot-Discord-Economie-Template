const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 2592000000 // 30 days in milliseconds, change if you'd like.
    let amount = 10000
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let monthly = await db.fetch(`monthly_${message.author.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
        let time = ms(timeout - (Date.now() - monthly));

        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#d7342a")
        .setDescription(`<a:nocheck:745642064183558245> Tu as deja tourner la page de ton calendrier ce mois ci attend **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**`);
        message.channel.send(timeEmbed)

    } else {
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**Monthly Récompense**`)
    .addField(`<a:check:741676531029508216> Tu as collecté`, amount)

    message.channel.send(embed)

    db.add(`money_${message.author.id}`, amount)
    db.set(`monthly_${message.author.id}`, Date.now())
        
    }

}

module.exports.help = {
    name: "monthly"
}