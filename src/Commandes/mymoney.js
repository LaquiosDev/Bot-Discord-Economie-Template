const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    let mymoney = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (mymoney === null) mymoney = 0;

    let embed11 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription('<:richpr:741678890975756389> Vous ouvrez votre __**portefeuille**__ et vous vous appercevez que vous avez __**`' + mymoney + '`€**__');
    message.channel.send(embed11)

}

module.exports.help = {
    name: "mymoney"
}