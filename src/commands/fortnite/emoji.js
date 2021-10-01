module.exports = {
    name: 'emoji',
    description: 'Change the bot\'s emoji',
    usage: '{emoji}',
    aliases: null,
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: true,
    premiumOnly: false,
    run: async (client, message, args) => {
        const emoji = client.util.FindCosmetic(args.join(" "), "emoji");

        if (emoji) {
            client.party.me.setEmoji(emoji.id);
            return message.author.sendMessage(`Set emoji to "${emoji.name}"`);
        } else {
            return message.author.sendMessage(`Could not find an emoji named "${args.join(" ")}"`);
        };
    }
}