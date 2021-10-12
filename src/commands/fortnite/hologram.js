module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Change the bot\'s skin to the star wars hologram',
    usage: require('path').parse(__filename).name,
    aliases: null,
    args: false,
    minArgs: null,
    maxArgs: -1,
    timeout: 5*1000,
    ownerOnly: false,
    run: async (client, message, args) => {
        client.party.me.setOutfit('CID_VIP_Athena_Commando_M_GalileoGondola_SG');
        return message.author.sendMessage(`Set skin to the star wars hologram`);
    }
}