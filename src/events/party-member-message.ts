import Event from '../core/event';
import BotClient from '../core/client';
import { PartyMessage } from 'fnbr';

class PartyMemberMessageEvent extends Event {
    constructor() {
        super({
            name: 'party:member:message',
        })
    }
    
    async run (client: BotClient, message: PartyMessage) {
        if (message.content.startsWith(client.settings.prefix)) {
            return message.reply('If you are trying to use the bot, message me throught friend messages!');
        };
    }
}

export default new PartyMemberMessageEvent;