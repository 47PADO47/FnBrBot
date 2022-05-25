module.exports = {
    name: 'hologram',
    description: 'Change the bot\'s skin to the star wars hologram',
    timeout: 5,
    run: async (client, message, args) => {
        client.party.me.setOutfit('CID_VIP_Athena_Commando_M_GalileoGondola_SG');
        return message.author.sendMessage(`Set skin to the star wars hologram`);
    }
}