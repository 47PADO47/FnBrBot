module.exports = {
    name: __filename.split('\\').pop().replace('.js', ''),
    description: 'test command',
    usage: require('path').parse(__filename).name,
    aliases: null,
    args: false,
    minArgs: null,
    maxArgs: -1,
    timeout: null,
    ownerOnly: false,
    run: async (client, message, args) => {
        console.log(this)
        console.log(__filename)
        console.log(require('path').parse(__filename))
        message.author.sendMessage('Test command works!')
    }
}