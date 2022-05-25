const Command = require('../../core/Command');

module.exports = new Command({
    name: 'skin',
    description: 'Change the bot\'s skin',
    usage: `{name || id}`,
    aliases: ['outfit'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5,
    run: async (client, message, args) => {
        const skin = client.util.FindCosmetic(client.cosmetics, args.join(" "), "outfit");

        if (!skin) return message.author.sendMessage(`Could not find a skin named "${args.join(" ")}"`);

        client.party.me.setOutfit(skin.id);
        return message.author.sendMessage(`Set skin to "${skin.name}"`);
    },
});