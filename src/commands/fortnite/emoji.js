const Command = require("../../core/Command")

module.exports = new Command({
    name: 'emoji',
    description: 'Change the bot\'s emoji',
    usage: `{name || id}`,
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5,
    run: async (client, message, args) => {
        const emoji = client.util.FindCosmetic(client.cosmetics, args.join(" "), "emoji");

        if (!emoji) return message.author.sendMessage(`Could not find an emoji named "${args.join(" ")}"`);
        client.party.me.setEmoji(emoji.id);
        return message.author.sendMessage(`Set emoji to "${emoji.name}"`);
    },
});