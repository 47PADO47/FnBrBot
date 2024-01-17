import { readdir } from 'fs/promises';
import Handler from '../core/handler';
import { HandlerRunOptions } from '../types/handler';
import * as utils from '../lib/utils'
import Event from '../core/event';
import { ClientEvents } from 'fnbr';

class EventHandler extends Handler {
    constructor() {
        super({
            name: 'events',
        })
    }

    async run({ client }: HandlerRunOptions): Promise<void> {
        const eventPath = utils.getDist('events');
        const events = (await readdir(eventPath))
            .filter(file => file.endsWith('.js'));

        for await (const file of events) {
            const { default: event } = await import(`${eventPath}/${file}`) as { default: Event };
            const name = (event.name || file.replace('.js', '')).replace('-', ':') as keyof ClientEvents;
    
            client.events.set(name, event);
            //if (event.once) client.once(name, (...args: any[]) => event.run(client, ...args));
            client.on(name, (...args: any[]) => event.run(client, ...args));
    
            client.logger.info(`Loaded event "${name}" 🚨`);
        }
    }
}

export default new EventHandler;