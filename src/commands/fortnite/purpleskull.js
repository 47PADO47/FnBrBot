module.exports = {
    name: 'purpleskull',
    description: 'Change the bot\'s skin to purpleskull',
    usage: '',
    aliases: null,
    args: false,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        client.party.me.setOutfit('CID_030_Athena_Commando_M_Halloween', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    }
}