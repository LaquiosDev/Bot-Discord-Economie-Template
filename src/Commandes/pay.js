const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {

    let user = message.mentions.members.first() || message.guild.members.find(gm => gm.id == args[0]);
    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`);
  
    let transaction = {
      amount: parseInt(args[1]),
    }

    if (!user) 
        return message.channel.send('Veuillez preciser une personne à qui transférer de l\'argent. (Exemple `spe.pay @membre 100`)')
    
    if (!transaction.amount)
        return message.channel.send('Veuillez specifier le montant de la transaction. (Exemple `spe.pay @membre 100`)')
    
    if (transaction.amount <= 0) { // Only positive amounts can be transferred
      
        if(transaction.amount < 0)
          return message.channel.send(`Impossible d'envoyer un montant negatif !`);
        else
          return message.channel.send(`Vous ne pouvez pas envoyer 0$, réésayez en utilisant une somme positive.`);

      
    if (member < transaction.amount) {
        return message.channel.send("Tu n'as pas suffisamment d'argent pour effectuer la transaction... Tapes ``spe.work`` pour en obtenir plus !")
    }

    message.channel.send(`${message.author.tag} viens d'envoyer **__${transaction.amount}__** à **__${user.user.username}__** !`);
    db.add(`money_${message.guild.id}_${user.id}`, transaction.amount)
    db.subtract(`money_${message.guild.id}_${message.author.id}`, transaction.amount)

}

module.exports.help = {
    name: "pay"
}
