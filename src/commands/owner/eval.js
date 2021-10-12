const { inspect } = require('util');

module.exports = {
    name: require('path').parse(__filename).name,
    description: 'Evaluate some code',
    usage: `${require('path').parse(__filename).name} {code}`,
    aliases: null,
    args: true,
    minArgs: 0,
    maxArgs: Infinity,
    timeout: null,
    ownerOnly: true,
    run: async (client, message, args) => {
        try {
            const data = await eval(args.join(' ').replace(/```/g, ''));
            let output = data;
            if (typeof data !== 'string') {
                output = inspect(data);
            }

            message.author.sendMessage(`\nOutput:\n${output}`)
        } catch (e) {
            message.author.sendMessage(e.message)
        }
    }
}