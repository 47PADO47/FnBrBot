import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class HologramCommand extends Command {
    constructor() {
        super({
            name: 'hologram',
            description: 'Change the bot\'s outfit to the star wars hologram',
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;

        client.party.me.setOutfit('CID_VIP_Athena_Commando_M_GalileoGondola_SG');
        message.reply(`Set outfit to the star wars hologram`);
        return;
    }
}

export default new HologramCommand;