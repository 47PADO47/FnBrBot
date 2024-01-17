import Event from '../core/event';
import BotClient from '../core/client';
import { Friend } from 'fnbr';

class FriendAddedEvent extends Event {
    constructor() {
        super({
            name: 'friend:added',
        })
    }
    
    async run (client: BotClient, friend: Friend) {
        return friend.sendMessage(`Hello ${friend.displayName} :)`);
    }
}

export default new FriendAddedEvent;