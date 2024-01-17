import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class ShowPickCommand extends Command {
    constructor() {
        super({
            name: 'showpick',
            description: 'Show the equipped pickaxe',
            aliases: ["showpickaxe", "pointitout"],
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        
        client.party.me.setEmote('EID_IceKing');
    }
}

export default new ShowPickCommand;