module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Show the equipped pickaxe',
    usage: require('path').parse(__filename).name,
    aliases: ["showpickaxe", "pointitout"],
    args: false,
    minArgs: null,
    maxArgs: -1,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        client.party.me.setEmote('EID_IceKing');
    }
}