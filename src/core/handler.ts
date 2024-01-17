import { HandlerOptions, HandlerRunOptions, IHandler } from '../types/handler';

class Handler implements IHandler {
    name: string;
    constructor(options: HandlerOptions) {
        this.name = options.name || __filename;
        if (options.run) this.run = options.run;
    }

    async run (_options: HandlerRunOptions): Promise<void> {
        throw new Error('Not implemented');
    }
}

export default Handler;