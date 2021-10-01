module.exports = {
    name: 'level',
    description: 'Change the bot\'s level',
    usage: '{level}',
    aliases: null,
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: 60*1000,
    ownerOnly: true,
    premiumOnly: false,
    run: async (client, message, args) => {
        const level = parseInt(args[0], 10);

        client.party.me.setLevel(level);
        return message.author.sendMessage(`Set level to "${level}"`);
    }
}