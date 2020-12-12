const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {
 // just copy & paste it in here.

    if (!message.member.hasPermission('MANAGE_GUILD')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('Tu n\'as pas les permissions.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); // delete after 2.5 seconds.
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, vous devez entrer un nombre pour supprimer.`) // if args[0] (first input) is not a number, return.
    db.subtract(`money_${message.guild.id}_${user.id}`, args[0]) // subtract it now
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Surpression d'argent`, message.author.displayAvatarURL)
    .addField(`De l'argent a etait suprimer de votre compte en banque. On etait supprimés :`, `${args[0]}€`)
    .addField(`Vous regardez sur votre telephone et vous constatez qu'il vous reste :`, `${bal}€`)
    .setColor("RED") // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)

}

module.exports.help = {
    name: "remove-money"
}