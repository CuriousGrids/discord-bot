module.export = {
    name:'clear',
    description: "Clear messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
        if(isNull(args[0])) return message.reply("Please enter a real number!");
        if(args[0] > 50) return message.reply("You cannot delete more than 50 messages!");
        if(args[0] < 1) return message.reply("You must delete at least 1 message!");
        await message.channel.messages.fetch({init: args[0]}).then(message => {
            message.channel.bulkDelete(messages);
        });
    }
}