module.exports = {
    name: 'skin',
    description: 'Change the bot\'s skin',
    usage: '{skin}',
    aliases: ['outfit'],
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        const skin = client.util.FindCosmetic(args.join(" "), "outfit");

        if (skin) {
            client.party.me.setOutfit(skin.id);
            return message.author.sendMessage(`Set skin to "${skin.name}"`);
        } else {
            return message.author.sendMessage(`Could not find a skin named "${args.join(" ")}"`);
        };
    }
}