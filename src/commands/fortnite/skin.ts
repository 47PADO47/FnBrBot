import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class SkinCommand extends Command {
    constructor() {
        super({
            name: 'skin',
            description: 'Change the bot\'s skin',
            usage: `{name || id}`,
            aliases: ['outfit'],
            args: true,
            minArgs: 0,
            maxArgs: 0,
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;

        const skin = client.findCosmetic({
            query: args.join(" "),
            type: "outfit",
        });

        if (!skin) {
            message.reply(`Could not find a skin named "${args.join(" ")}"`);
            return;
        }

        client.party.me.setOutfit(skin.id, undefined, undefined);
        message.reply(`Set skin to "${skin.name}"`);
    }
}

export default new SkinCommand;