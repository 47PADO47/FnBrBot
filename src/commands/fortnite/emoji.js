module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s emoji',
    usage: `${require('path').parse(__filename).name} {name || id}`,
    aliases: null,
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        const emoji = client.util.FindCosmetic(client.cosmetics, args.join(" "), "emoji");

        if (emoji) {
            client.party.me.setEmoji(emoji.id);
            return message.author.sendMessage(`Set emoji to "${emoji.name}"`);
        } else {
            return message.author.sendMessage(`Could not find an emoji named "${args.join(" ")}"`);
        };
    }
}