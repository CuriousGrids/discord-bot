const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const client = new Discord.Client();

// commands
const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Online
client.once('ready', ()=> {
    console.log('Pickle Rick is online!');
});

// commands
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.lenght).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }
    else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

// Assign roles
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('849615121852399636').send(`Whassuupp! <@${guildMember.user.id}>, you are now a "member" of Curious Grids. Make sure you introduce yourself in #introduce channel. Wubba Lubba Dub-Dub :)`)
});

// Login
client.login(process.env.DISCORD_TOKEN);