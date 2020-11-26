const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');
client.login(process.env.BOT_TOKEN);
const api = require('chuck-norris-api');

const prefix = "!";

client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "moulart"){
        message.reply(`chui un moulbit`);
    }

    if(command === "charles"){
        message.reply("L'IA va tous nous déglinguer !")
    }
    if(command === "cat"){
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        message.channel.send(file);
    }
    if(command === "chucknorris"){
        
        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
            .setTitle("Chuck Norris")
            .setImage("https://media.giphy.com/media/AhwuGl0MPNzyg/giphy.gif")
        message.channel.send(embed)
        api.getRandom({}).then(function (data) {
            message.reply(data.value.joke)
        });
    }
    if(command === "geraldine"){

        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
            .setTitle("Cesi made me rich")
            .setImage("https://media2.giphy.com/media/14SAx6S02Io1ThOlOY/giphy.gif")
        message.channel.send(embed)
        

    }
    if(command === "delta"){
        const timeTaken = Date.now() - message.createdTimestamp;        
        message.reply("Oups Oups... y'a un delta de " + timeTaken + "ms")
        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
        .setTitle("Cesi made me rich")
        .setImage("https://media.giphy.com/media/xUOwGgxZLBmqB87sic/giphy.gif")
        
        message.channel.send(embed)
    }

    

})



