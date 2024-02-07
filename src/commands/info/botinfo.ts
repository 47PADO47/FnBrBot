import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command";
import * as utils from '../../lib/utils';
import { readFile } from "fs/promises";

class BotInfoCommand extends Command {
    constructor() {
        super({
            name: 'botinfo',
            description: 'Retrive infos about the bot',
        })
    }

    async run({ client, message }: CommandRunOptions) {
        const pkg = JSON.parse(await readFile(`${process.cwd()}/package.json`, 'utf-8'));
        const fnbr_v = pkg.dependencies.fnbr;

        const infos: string[] = [
            'Infos:',
            `> fnbr: ${fnbr_v.replace('^', 'v')}`,
            `> Node.js: ${process.version}`,
            `> Version: v${pkg.version}`,
            `> Platform: ${process.platform}`,
            `> Heap Total: ${utils.formatBytes(process.memoryUsage().heapTotal)}`,
            `> Heap Used: ${utils.formatBytes(process.memoryUsage().heapUsed)}`,
            `> Author: ${pkg.author}`,
        ];

        message.reply(infos.join('\n'));
    }
}

export default new BotInfoCommand;