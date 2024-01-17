import { Client } from 'fnbr';
import { EventOptions, IEvent } from '../types/event';

class Event implements IEvent {
    name: string;
    once: boolean;
    constructor(options: EventOptions) {
        this.name = options.name;
        this.once = options.once || false;
        if (options.run) this.run = options.run;
    }

    run (_client: Client, ..._args: any[]):void {
        throw new Error('Not implemented');
    }
}

export default Event;