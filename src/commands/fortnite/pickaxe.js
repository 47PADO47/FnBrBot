module.exports = {
    name: 'pickaxe',
    description: 'Change the bot\'s pickaxe',
    usage: '{pickaxe}',
    aliases: ['pick'],
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        const pickaxe = client.util.FindCosmetic(args.join(" "), "pickaxe");

        if (pickaxe) {
            client.party.me.setPickaxe(pickaxe.id);
            return message.author.sendMessage(`Set pickaxe to "${pickaxe.name}"`);
        } else {
            return message.author.sendMessage(`Could not find a pickaxe named "${args.join(" ")}"`);
        };
    }
}