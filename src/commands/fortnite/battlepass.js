module.exports = {
    name: 'battlepass',
    description: 'Change the bot\'s battle pass level',
    usage: '{level}',
    aliases: ["bp"],
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: 60*1000,
    ownerOnly: true,
    premiumOnly: false,
    run: async (client, message, args) => {
        const level = parseInt(args[0], 10);

        client.party.me.setBattlepass(true, level, 100, 100);
        return message.author.sendMessage(`Set battle pass level to "${level}"`);
    }
}