module.exports = {
    run: async (client, message) => {
        if (message.content.startsWith(client.settings.prefix)) {
            return message.reply('If you are trying to use the bot, message me throught friend messages!');
        };
    }
}