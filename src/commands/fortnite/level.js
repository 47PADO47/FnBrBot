const Command = require("../../core/Command");

module.exports = new Command({
    name: 'level',
    description: 'Change the bot\'s level',
    usage: `{number}`,
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 30,
    ownerOnly: true,
    run: async (client, message, args) => {
        const level = parseInt(args[0], 10);

        client.party.me.setLevel(level);
        return message.author.sendMessage(`Set level to "${level}"`);
    },
});