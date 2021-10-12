module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s emote',
    usage: `${require('path').parse(__filename).name} {name || id}`,
    aliases: ['dance'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        const emote = client.util.FindCosmetic(client.cosmetics, args.join(" "), "emote");

        if (emote) {
            client.party.me.setEmote(emote.id);
            return message.author.sendMessage(`Set emote to "${emote.name}"`);
        } else {
            return message.author.sendMessage(`Could not find an emote named "${args.join(" ")}"`);
        };
    }
}