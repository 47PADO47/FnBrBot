import { Client, Enums } from 'fnbr';
import * as auth from '../lib/auth';
import { Config } from '../types/config';
import Command from './command';
import Handler from './handler';
import Event from './event';
import { readdir } from 'fs/promises';
import { Logger } from '@schiacciata/logger';
import { Cosmetic, SearchCosmeticOptions } from '../types/cosmetics';
import { request } from 'undici'
import { getDist } from '../lib/fs';

class BotClient extends Client {
    settings: Config;
    commands: Map<string, Command>;
    aliases: Map<string, string>;
    timeout: Map<string, number>;
    events: Map<string, Event>;
    logger: Logger;
    cosmetics: Cosmetic[];
    constructor(config: Config) {
        super({
            "defaultStatus": config.status,
            "platform": config.platform,
            "xmppKeepAliveInterval": 50,
            "auth": auth.load(),
            "partyConfig": {
                "privacy": Enums.PartyPrivacy.PUBLIC,
                "joinConfirmation": false,
                "joinability": "OPEN",
                "maxSize": 16,
                "chatEnabled": true,
            },
            "defaultOnlineType": Enums.PresenceOnlineType.ONLINE,
        });
        
        this.logger = new Logger();
        this.settings = config;
        this.cosmetics = [];

        const collections = ["commands", "aliases", "timeout", 'events'] as const;
        for (const collection of collections) {
            this[collection] = new Map();
        }
    }
    
    private async _loadHandlers(): Promise<void> {
        const handlers = (await readdir(getDist('handlers')))
            .filter(file => file.endsWith('.js'));

        for await (const file of handlers) {
            const { default: handler } = await import(getDist('handlers', file)) as { default: Handler };
            
            try {
                await handler.run({
                    client: this,
                });
                this.logger.success(`Loaded handler: ${handler.name} ⚙️`);
            } catch (error) {
                this.logger.error(`Handler ${handler.name} failed`, error);
                process.exit(1);
            }
        }
    }

    public findCosmetic({ query, type }: SearchCosmeticOptions) {
        return this.cosmetics
            .find((cosmetic) => (cosmetic.id.toLowerCase() === query.toLowerCase() || cosmetic.name.toLowerCase() === query.toLowerCase()) && cosmetic.type.value === type);
    }

    private async _loadCosmetics(): Promise<void> {
        const { statusCode, body } = await request('https://fortnite-api.com/v2/cosmetics/br');
        if (statusCode !== 200) {
            this.logger.error(`Could not download cosmetics`, statusCode);
            return process.exit(1);
        }

        try {
            this.cosmetics = (await body.json() as any).data;
        } catch (error) {
            this.logger.error(`Could not download cosmetics`);
            return process.exit(1);
        }
    }

    async start() {
        await this._loadHandlers();
        await this._loadCosmetics();
        await super.login()
        //process.exit();
    }
}

export default BotClient;