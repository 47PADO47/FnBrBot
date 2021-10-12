module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s level',
    usage: `${require('path').parse(__filename).name} {number}`,
    aliases: null,
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 30*1000,
    ownerOnly: true,
    run: async (client, message, args) => {
        const level = parseInt(args[0], 10);

        client.party.me.setLevel(level);
        return message.author.sendMessage(`Set level to "${level}"`);
    }
}