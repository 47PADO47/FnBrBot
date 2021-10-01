module.exports = {
    name: 'showpick',
    description: 'Show the equipped pickaxe',
    usage: '',
    aliases: ["showpickaxe", "pointitout"],
    args: false,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        client.party.me.setEmote('EID_IceKing');
    }
}