const Command = require("../../core/Command");

module.exports = new Command({
    name: 'emote',
    description: 'Change the bot\'s emote',
    usage: `{name || id}`,
    aliases: ['dance'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5,
    run: async (client, message, args) => {
        const emote = client.util.FindCosmetic(client.cosmetics, args.join(" "), "emote");

        if (!emote) return message.author.sendMessage(`Could not find an emote named "${args.join(" ")}"`);
        client.party.me.setEmote(emote.id);
        return message.author.sendMessage(`Set emote to "${emote.name}"`);
    },
});