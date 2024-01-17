import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class PickaxeCommand extends Command {
    constructor() {
        super({
            name: 'pickaxe',
            description: 'Change the bot\'s pickaxe',
            usage: `{name || id}`,
            aliases: ['pick'],
            args: true,
            minArgs: 0,
            maxArgs: 0,
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        const pickaxe = client.findCosmetic({
            query: args.join(" "),
            type: "pickaxe",
        });

        if (!pickaxe) {
            message.reply(`Could not find a pickaxe named "${args.join(" ")}"`);
            return;
        }
        client.party.me.setPickaxe(pickaxe.id);
        message.reply(`Set pickaxe to "${pickaxe.name}"`);

        return;
    }
}

export default new PickaxeCommand;