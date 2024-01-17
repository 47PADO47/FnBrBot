import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class BackpackCommand extends Command {
    constructor() {
        super({
            name: 'backpack',
            description: 'Change the bot\'s backpack',
            usage: `{name || id}`,
            aliases: ['backbling'],
            args: true,
            minArgs: 0,
            maxArgs: 0,
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        const backpack = client.findCosmetic({
            query: args.join(" "),
            type: "backpack",
        });

        if (!backpack) {
            message.reply(`Could not find a backpack named "${args.join(" ")}"`);
            return;
        }
        client.party.me.setBackpack(backpack.id);
        message.reply(`Set backpack to "${backpack.name}"`);

        return;
    }
}

export default new BackpackCommand;