module.export = {
    name:'reactionrole',
    description: 'React with emojis',
    async execute(message, args, Discord, client){
        const channel = '824150393520390147';
        const member = message.guild.roles.cache.find(role => role.name === "member");

        const member = '🚀';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Hello!')
        .setDescription('Enjoy the bot emoji!\n\n'
        + `${member} for member\n`);

        let MessageEmbed = await message.channel.send(embed);
        MessageEmbed.react(member);
    }
}