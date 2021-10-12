module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s skin',
    usage: `${require('path').parse(__filename).name} {name || id}`,
    aliases: ['outfit'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        const skin = client.util.FindCosmetic(client.cosmetics, args.join(" "), "outfit");

        if (skin) {
            client.party.me.setOutfit(skin.id);
            return message.author.sendMessage(`Set skin to "${skin.name}"`);
        } else {
            return message.author.sendMessage(`Could not find a skin named "${args.join(" ")}"`);
        };
    }
}