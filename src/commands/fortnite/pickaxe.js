module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s pickaxe',
    usage: `${require('path').parse(__filename).name} {name || id}`,
    aliases: ['pick'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        const pickaxe = client.util.FindCosmetic(client.cosmetics, args.join(" "), "pickaxe");

        if (pickaxe) {
            client.party.me.setPickaxe(pickaxe.id);
            return message.author.sendMessage(`Set pickaxe to "${pickaxe.name}"`);
        } else {
            return message.author.sendMessage(`Could not find a pickaxe named "${args.join(" ")}"`);
        };
    }
}