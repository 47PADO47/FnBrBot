module.exports = {
    name: 'test',
    description: 'test command',
    usage: 'test',
    aliases: [''],
    args: false,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    dmOnly: false,
    run: async (client, message, args) => {
        console.log('test command')
        message.author.sendMessage('Test command works!')
    }
}