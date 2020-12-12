  
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)


    if (!user) {
        return message.channel.send('Veuillez presisez une personne.')
    }
    if (!args[1]) {
        return message.channel.send('Veuillez specifiez la sommes.')
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send(`Impossible d'envoyer un chiffre negatif !`)
    }

    if (member < args[1]) {
        return message.channel.send("Tu n'as pas d'argent, ``spe.work`` pour en avoir")
    }

    message.channel.send(`${message.author.tag} vien d'envoyer **__${args[1]}__** à **__${user.user.username}__** !`)
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
    name: "pay"
}