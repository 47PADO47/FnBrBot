const Command = require("../../core/Command");

module.exports = new Command({
    name: 'pickaxe',
    description: 'Change the bot\'s pickaxe',
    usage: `{name || id}`,
    aliases: ['pick'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5,
    run: async (client, message, args) => {
        const pickaxe = client.util.FindCosmetic(client.cosmetics, args.join(" "), "pickaxe");

        if (!pickaxe) return message.author.sendMessage(`Could not find a pickaxe named "${args.join(" ")}"`);
        client.party.me.setPickaxe(pickaxe.id);
        return message.author.sendMessage(`Set pickaxe to "${pickaxe.name}"`);
    },
});