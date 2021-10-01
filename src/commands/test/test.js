module.exports = {
    name: 'test',
    description: 'test command',
    usage: '',
    aliases: null,
    args: false,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        message.author.sendMessage('Test command works!')
    }
}