module.export = {
    name:'youtube',
    description: 'Sends YouTube channel link!',
    execute(message, args){
        message.channel.send('Link');
    }
}