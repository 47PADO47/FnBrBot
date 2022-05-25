const Command = require('../../core/Command');

module.exports = new Command({
    name: 'test',
    description: 'Test command',
    run: async (client, message, args) => {
        message.author.sendMessage('Test command works!')
    },
});