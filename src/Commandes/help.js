const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#D8D8D8")
    .setAuthor(`Menu aide`, client.user.avatarURL())
    .setDescription("● Prefix: ``.``\n● Commandes: ``.<la commande>``\n● Ping: ``.ping``\n \n<:letter:761879660291686401> **Economies (8)**\n``add-money`` + montant\n``remove-money`` + montant + user\n``daily``, ``monthly``, ``mymoney``, ``pay``, ``store``, ``weekly``, ``work``")
    .setFooter("Menu d'aide, Made By (Laquios)[https://github.com/LaquiosDev/Bot-Discord-Template/]")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "help"
}