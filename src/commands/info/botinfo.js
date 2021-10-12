const p = require(`${process.cwd()}/package.json`);
const fnbr_v = p.dependencies.fnbr;

module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Retrive infos about the bot',
    usage: require('path').parse(__filename).name,
    aliases: null,
    args: false,
    minArgs: null,
    maxArgs: -1,
    timeout: null,
    ownerOnly: false,
    run: async (client, message, args) => {
        message.author.sendMessage(
            `\nInfos:\n> fnbr: ${fnbr_v.replace('^', 'v')}\n> Node.js: ${process.version}\n> Version: v${p.version}\n> Platform: ${process.platform}\n> 3000 Total: ${client.util.FormatBytes(process.memoryUsage().heapTotal)}\n> 3000 Used: ${client.util.FormatBytes(process.memoryUsage().heapUsed)}\n> Author: ${p.author}`
            )
    }
}