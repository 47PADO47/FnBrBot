import { readdir } from 'fs/promises';
import Handler from '../core/handler';
import { HandlerRunOptions } from '../types/handler';
import Command from '../core/command';
import { getDist } from '../lib/fs';

class CommandHandler extends Handler {
    constructor() {
        super({
            name: 'commands',
        })
    }

    async run({ client }: HandlerRunOptions): Promise<void> {
        const commandPath = getDist('commands');
        const categories = await readdir(commandPath);

        for await (const category of categories) {
            const commands = (await readdir(getDist(commandPath, category)))
            .filter(file => file.endsWith('.js'));

            for await (const file of commands) {
                const { default: command } = await import(`${commandPath}/${category}/${file}`) as { default: Command };
                const name = (command.name || file.replace('.js', ''));
        
                client.commands.set(name, command);
                if (command.aliases) {
                    command.aliases.forEach(alias => client.aliases.set(alias, command.name));
                }
        
                client.logger.info(`Loaded command "${category}/${name}" 💬`);
            }
        }
    }
}

export default new CommandHandler;