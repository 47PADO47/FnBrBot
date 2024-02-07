import Event from '../core/event';
import BotClient from '../core/client';
import { RefreshTokenData } from 'fnbr';
import { writeFile } from 'fs/promises';
import { existsOrCreate, getTemp } from '../lib/fs';

class RefreshTokenCreatedEvent extends Event {
    constructor() {
        super({
            name: 'refreshtoken:created',
            once: true,
        })
    }
    
    async run (client: BotClient, refreshTokenData: RefreshTokenData) {
        existsOrCreate(getTemp());

        const refreshTokenPath = getTemp(`refreshToken`);
        await writeFile(refreshTokenPath, refreshTokenData.token);
        
        client.logger.success(`Created "${refreshTokenPath}" file, expires at ${refreshTokenData.expiresAt}`);
    }
}

export default new RefreshTokenCreatedEvent;