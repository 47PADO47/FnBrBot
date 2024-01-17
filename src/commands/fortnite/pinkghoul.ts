import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class PinkGhoulCommand extends Command {
    constructor() {
        super({
            name: 'pinkghoul',
            description: 'Change the bot\'s skin to pinkghoul',
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    }
}

export default new PinkGhoulCommand;