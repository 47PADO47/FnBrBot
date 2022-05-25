const Command = require("../../core/Command");

module.exports = new Command({
    name: 'purpleskull',
    description: 'Change the bot\'s skin to purpleskull',
    timeout: 5,
    run: async (client, message, args) => {
        client.party.me.setOutfit('CID_030_Athena_Commando_M_Halloween', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    }
});