module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s skin to pinkghoul',
    usage: require('path').parse(__filename).name,
    aliases: null,
    args: false,
    minArgs: null,
    maxArgs: -1,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    }
}