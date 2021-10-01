module.exports = {
    name: 'backbling',
    description: 'Change the bot\'s backbling',
    usage: '{backbling}',
    aliases: ['backpack'],
    args: true,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        const backbling = client.util.FindCosmetic(args.join(" "), "backpack");

        if (backbling) {
            client.party.me.setBackbling(backbling.id);
            return message.author.sendMessage(`Set backbling to "${backbling.name}"`);
        } else {
            return message.author.sendMessage(`Could not find a backbling named "${args.join(" ")}"`);
        };
    }
}