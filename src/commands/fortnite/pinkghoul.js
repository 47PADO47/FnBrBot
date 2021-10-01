module.exports = {
    name: 'pinkghoul',
    description: 'Change the bot\'s skin to pinkghoul',
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
        client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    }
}