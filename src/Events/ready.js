const Discord = require("discord.js");

module.exports = (client) => {


    console.log(`${client.user.username} est en ligne`);

    client.user.setActivity("Made by Laquios | .help", {type: "LISTENING"});
    
}
