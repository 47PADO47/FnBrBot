import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command";

class LevelCommand extends Command {
    constructor() {
        super({
            name: 'level',
            description: 'Change the bot\'s level',
            usage: `{number}`,
            aliases: ['lvl'],
            args: true,
            minArgs: 0,
            maxArgs: 0,
            timeout: 30,
            ownerOnly: true,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        const level = parseInt(args[0], 10);

        client.party.me.setLevel(level);
        message.reply(`Set level to "${level}"`);
        return;
    }
}

export default new LevelCommand;