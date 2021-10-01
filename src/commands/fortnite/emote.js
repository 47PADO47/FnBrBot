module.exports = {
    name: 'emote',
    description: 'Change the bot\'s emote',
    usage: '{emote}',
    aliases: ['dance'],
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        const emote = client.util.FindCosmetic(args.join(" "), "emote");

        if (emote) {
            client.party.me.setEmote(emote.id);
            return message.author.sendMessage(`Set emote to "${emote.name}"`);
        } else {
            return message.author.sendMessage(`Could not find an emote named "${args.join(" ")}"`);
        };
    }
}