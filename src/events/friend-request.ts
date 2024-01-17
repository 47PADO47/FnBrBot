import Event from '../core/event';
import BotClient from '../core/client';
import { IncomingPendingFriend } from 'fnbr';

class FriendRequestEvent extends Event {
    constructor() {
        super({
            name: 'friend:request',
        })
    }
    
    async run (client: BotClient, pendingFriend: IncomingPendingFriend) {
        return pendingFriend.addFriend();
    }
}

export default new FriendRequestEvent;