import Event from '../core/event';
import BotClient from '../core/client';
import { RefreshTokenData } from 'fnbr';
import { writeFile } from 'fs/promises';

class RefreshTokenCreatedEvent extends Event {
    constructor() {
        super({
            name: 'refreshtoken:created',
            once: true,
        })
    }
    
    async run (client: BotClient, refreshTokenData: RefreshTokenData) {
        await writeFile(`${process.cwd()}/temp/refreshToken`, refreshTokenData.token);
        client.logger.success(`Created "/temp/refreshToken" file, expires at ${refreshTokenData.expiresAt}`);
    }
}

export default new RefreshTokenCreatedEvent;