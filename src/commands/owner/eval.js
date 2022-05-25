const Command = require('../../core/Command');
const { inspect } = require('util');

module.exports = new Command({
    name: 'eval',
    description: 'Evaluate some code',
    usage: `{code}`,
    args: true,
    minArgs: 0,
    maxArgs: Infinity,
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
    },
});