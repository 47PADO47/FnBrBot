import { inspect } from "util";
import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class EvalCommand extends Command {
    constructor() {
        super({
            name: 'eval',
            description: 'Evaluate some code',
            usage: `{code}`,
            args: true,
            minArgs: 0,
            maxArgs: Infinity,
            ownerOnly: true,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;

        try {
            const data = await eval(args.join(' ').replace(/```/g, ''));
            let output = data;
            if (typeof data !== 'string') {
                output = inspect(data);
            }

            message.reply(`\nOutput:\n${output}`)
        } catch (e) {
            if (e instanceof Error) {
                message.reply(e.message);
                return;
            }
        }
    }
}

export default new EvalCommand;