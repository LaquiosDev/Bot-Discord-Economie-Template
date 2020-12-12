const Discord = require('discord.js')
const db = require('quick.db')


module.exports.run = async (bot, message, args) => {



    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply("Tu n'as pas la permission !")
    }

    if (!args[0]) return message.reply('La banque ne peut pas envoyer si il y a pas de chiffres !')
    if (isNaN(args[0])) return message.reply('Chiffre non reconnu')

    let user = message.mentions.users.first() || "<" + "@" + message.author + ">"
    message.channel.send('Operation realisé avec succes, __**' + `${args[0]}€` + '**__ on etait ajoutés à ' + user)
    db.add(`money_${message.guild.id}_${message.author.id}`, args[0])

}

module.exports.help = {
    name: "add-money"
}