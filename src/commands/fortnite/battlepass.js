module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s battle pass level',
    usage: `${require('path').parse(__filename).name} {number}`,
    aliases: ["bp"],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 30*1000,
    ownerOnly: true,
    run: async (client, message, args) => {
        const level = parseInt(args[0], 10);

        client.party.me.setBattlepass(true, level, 100, 100);
        return message.author.sendMessage(`Set battle pass level to "${level}"`);
    }
}