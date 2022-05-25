const Command = require("../../core/Command");

module.exports = new Command({
    name: 'pinkghoul',
    description: 'Change the bot\'s skin to pinkghoul',
    timeout: 5,
    run: async (client, message, args) => {
        client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    },
});