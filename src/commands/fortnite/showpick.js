const Command = require("../../core/Command");

module.exports = new Command({
    name: 'showpick',
    description: 'Show the equipped pickaxe',
    aliases: ["showpickaxe", "pointitout"],
    timeout: 5,
    run: async (client, message, args) => {
        client.party.me.setEmote('EID_IceKing');
    },
});