module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s backbling',
    usage: `${require('path').parse(__filename).name} {name || id}`,
    aliases: ['backpack'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        const backbling = client.util.FindCosmetic(client.cosmetics, args.join(" "), "backpack");

        if (backbling) {
            client.party.me.setBackpack(backbling.id);
            return message.author.sendMessage(`Set backbling to "${backbling.name}"`);
        } else {
            return message.author.sendMessage(`Could not find a backbling named "${args.join(" ")}"`);
        };
    }
}