const fetch = require('node-fetch');

module.exports = {
    run: async (client) => {
        client.logger.success(`Logged in as ${client.user.displayName}`);

        /*const locker = {
            outfit: client.cosmetics.find((c) => c.name === client.settings.outfit && c.type.value === 'outfit'),
            backpack: client.cosmetics.find((c) => c.name === client.settings.backpack && c.type.value === 'backpack'),
            pickaxe: client.cosmetics.find((c) => c.name === client.settings.pickaxe && c.type.value === 'pickaxe'),
            emote: client.cosmetics.find((c) => c.name === client.settings.emote && c.type.value === 'emote')
        };

        for (const cosmetic of Object.keys(locker)) {
            if (!locker[cosmetic]) {
              client.logger.error(`Could not find ${cosmetic}, please check the spelling!`);
              return;
            }
        }

        ["Outfit", "Backpack", "Pickaxe", "Emote"].forEach(async e => {
            var x = 'set' + e;
            await client.party.me[x](locker[e.toLowerCase()].id)
        })*/
        console.log(client.cosmetics)
        console.log(typeof client.cosmetics)
    }
}