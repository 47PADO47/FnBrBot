import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command";

class TestCommand extends Command {
    constructor() {
        super({
            name: 'test',
            description: 'Test command',
            aliases: ['tst'],
        })
    }

    async run({ message }: CommandRunOptions) {
        await message.reply('Test command works!');
    }
}

export default new TestCommand;