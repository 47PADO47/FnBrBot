import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class PurpleSkullCommand extends Command {
    constructor() {
        super({
            name: 'purpleskull',
            description: 'Change the bot\'s skin to purpleskull',
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        client.party.me.setOutfit('CID_030_Athena_Commando_M_Halloween', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    }
}

export default new PurpleSkullCommand;