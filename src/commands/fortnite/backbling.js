const Command = require("../../core/Command");

module.exports = new Command({
    name: 'backbling',
    description: 'Change the bot\'s backbling',
    usage: `{name || id}`,
    aliases: ['backpack'],
    args: true,
    minArgs: 0,
    maxArgs: 0,
    timeout: 5,
    run: async (client, message, args) => {
        const backbling = client.util.FindCosmetic(client.cosmetics, args.join(" "), "backpack");

        if (!backbling) return message.author.sendMessage(`Could not find a backbling named "${args.join(" ")}"`);
        client.party.me.setBackpack(backbling.id);
        return message.author.sendMessage(`Set backbling to "${backbling.name}"`);
    },
});