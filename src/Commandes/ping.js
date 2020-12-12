const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send("<:download:741673750327459890> Veuillez patientez").then(async(m) => await m.edit(`Connecté avec : ${Date.now() - début} ms`));
};

module.exports.help = {
    name: "ping"
}