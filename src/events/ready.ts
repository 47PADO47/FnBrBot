import Event from '../core/event';
import BotClient from '../core/client';
import { Cosmetic, LockerOptions, lockerOptions } from '../types/cosmetics';

class ReadyEvent extends Event {
    constructor() {
        super({
            name: 'ready',
            once: true,
        })
    }
    
    async run (client: BotClient) {
        if (!client.party) {
            client.logger.error('Bot is not in a party');
            return;
        }

        const bot = client.user.self;
        if (!bot) return;

        client.logger.success(`Logged in as ${bot.displayName} (${bot.email} - ${bot.emailVerified ? "Email Verified ✔️" : "Email Not Verified ❌"})`);
        process.title = `Fortnite Lobby Bot - Logged in as ${bot.displayName} (${bot.email} - ${bot.id})`;

        const locker: Partial<Record<LockerOptions, Cosmetic | undefined>> = {
            Outfit: client.cosmetics.find((c) => c.name === (client.settings.outfit ?? "Recruit") && c.type.value === 'outfit'),
            Backpack: client.cosmetics.find((c) => c.name === (client.settings.backpack ?? "Love Wings") && c.type.value === 'backpack'),
            Pickaxe: client.cosmetics.find((c) => c.name === (client.settings.pickaxe ?? "Default Pickaxe") && c.type.value === 'pickaxe'),
            Emote: client.cosmetics.find((c) => c.name === (client.settings.emote ?? "Dance Moves") && c.type.value === 'emote'),
        };
            
        for await (const lockerOption of lockerOptions) {
            const cosmetic = locker[lockerOption];
            if (!cosmetic) {
                //client.logger.error(`Could not find ${lockerOption}, please check the spelling!`);
                return;
            }

            client.logger.log(`Set ${lockerOption} to ${cosmetic.name}`);

            const method: `set${LockerOptions}` = `set${lockerOption}`;
            const itemId: string = cosmetic.id;

            await client.party.me[method](itemId);
        }

        const level = client.settings.level ?? 100;
        await client.party.me.setLevel(level)
            .then(() => client.logger.log(`Set Level to ${level}`));
    }
}

export default new ReadyEvent;