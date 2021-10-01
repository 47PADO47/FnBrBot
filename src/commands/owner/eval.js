const { inspect } = require('util');

module.exports = {
    name: 'eval',
    description: 'Evaluate some code',
    usage: '{code}',
    aliases: null,
    args: true,
    minArgs: '',
    maxArgs: '',
    category: 'owner',
    timeout: '',
    ownerOnly: true,
    premiumOnly: false,
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