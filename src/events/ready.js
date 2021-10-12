module.exports = {
    run: async (client) => {
        client.logger.success(`Logged in as ${client.user.displayName} (${client.user.email} - ${client.user.emailVerified ? "Email Verified ✔️" : "Email Not Verified ❌"})`);

        process.title = `Fortnite Lobby Bot - Logged in as ${client.user.displayName} (${client.user.email} - ${client.user.id})`;

        const locker = {
            outfit: client.cosmetics.find((c) => c.name === (client.settings.outfit ? client.settings.outfit : "Recruit") && c.type.value === 'outfit'),
            backpack: client.cosmetics.find((c) => c.name === (client.settings.backpack ? client.settings.backpack : "Love Wings") && c.type.value === 'backpack'),
            pickaxe: client.cosmetics.find((c) => c.name === (client.settings.pickaxe ? client.settings.pickaxe : "Default Pickaxe") && c.type.value === 'pickaxe'),
            emote: client.cosmetics.find((c) => c.name === (client.settings.emote ? client.settings.emote : "Dance Moves") && c.type.value === 'emote')
        };

        for (const cosmetic of Object.keys(locker)) {
            if (!locker[cosmetic]) {
              client.logger.error(`Could not find ${cosmetic}, please check the spelling!`);
              return;
            }
        }

        ["Outfit", "Backpack", "Pickaxe", "Emote"].forEach(async e => {
            client.logger.log(`Set ${e.toString()} to ${locker[e.toLocaleLowerCase()].name}`);
            var x = 'set'.concat(e);
            await client.party.me[x](locker[e.toLowerCase()].id);
        });

        const level = client.settings.level ? parseInt(client.settings.level) : 100;
        await client.party.me.setLevel(level)
        .then(() => client.logger.log(`Set Level to ${level}`));
    }
}