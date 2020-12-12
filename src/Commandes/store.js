const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {
     
    let embed = new Discord.MessageEmbed()
    .setTitle(`Shop de SP Developpement`)
    .setDescription('**Contactez le staff pour avoir votre role.**')
    .addField(`✨︙VIP`, 'Pour avoir ce role il te faut : `100000€`')
    .addField(`🏮︙ULTIME`, 'Pour avoir ce role il te faut : `250000€`')
    .setColor("#D8D8D8") 

    message.channel.send(embed)

}

module.exports.help = {
    name: "store"
}