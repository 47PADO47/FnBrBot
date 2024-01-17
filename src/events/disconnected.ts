import Event from '../core/event';
import BotClient from '../core/client';

class DisconnectedEvent extends Event {
    constructor() {
        super({
            name: 'friend:added',
            once: true,
        })
    }
    
    async run (client: BotClient) {
        client.logger.error(`The client got disconnected, the bot will shut-down`);
        return process.exit();
    }
}

export default new DisconnectedEvent;