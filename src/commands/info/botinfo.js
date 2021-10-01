const p = require(`${process.cwd()}/package.json`);
const fnbr_v = p.dependencies.fnbr;

module.exports = {
    name: 'botinfo',
    description: 'Retrive infos about the bot',
    usage: '',
    aliases: null,
    args: false,
    minArgs: '',
    maxArgs: '',
    category: '',
    timeout: '',
    ownerOnly: false,
    premiumOnly: false,
    run: async (client, message, args) => {
        message.author.sendMessage(
            `\nInfos:\n> fnbr: ${fnbr_v.replace('^', 'v')}\n> Node.js: ${process.version}\n> Version: v${p.version}\n> Platform: ${process.platform}\n> 3000 Total: ${client.util.FormatBytes(process.memoryUsage().heapTotal)}\n> 3000 Used: ${client.util.formatBytes(process.memoryUsage().heapUsed)}\n> Author: ${p.author}`
            )
    }
}