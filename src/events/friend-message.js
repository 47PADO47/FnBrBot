const ms = require('ms');

module.exports = {
    run: async (client, message) => {

        let prefix = client.settings.prefix || client.user.displayName;

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));
        if (!command) return;

        if (command.ownerOnly && !client.settings.ownerIds.includes(message.author.id)) {
            return message.author.sendMessage(`X | ${message.author.displayName},  Only the owner can use this comand!`);
        }
        if (command.args && !args.length) {
            let reply = `X | ${message.author.displayName}, you didn't provide any arguments!`;
            if (command.usage) {
                reply += `\n The proper usage would be: "${prefix}${command.usage}"`;
            }

            return message.author.sendMessage(reply);
        } 
        
        if (!command.args && command.maxArgs != 0 && args.length) {
            let reply = `X | ${message.author.displayName}, this command require 0 arguments!`;
            if (command.usage) {
                reply += `\n The proper usage would be: "${prefix}${command.usage}"`;
            }

            return message.author.sendMessage(reply);
        }

        if (command.minArgs && !args[command.minArgs]) {
            return message.author.sendMessage(`X | ${message.author.displayName}, you need at least ${command.minArgs + 1} arguments to run this command!\nThe proper usage would be: ${prefix}${command.usage}`);
        }

        if (command.maxArgs && args[command.maxArgs++]) {
            return message.author.sendMessage(`X | ${message.author.displayName}, you used too many arguments! Max: ${command.maxArgs}\nThe proper usage would be: "${prefix}${command.usage}"`);
        }
        
        if (command.timeout) {
            if (client.timeout.has(`${command.name}${message.author.id}`))
                return message.author.sendMessage(`X | ${message.author.displayName}, you need to wait "${ms(
                    client.timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true }
              )}" to use that command!`);
            client.timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout);
            setTimeout(() => {
                client.timeout.delete(`${command.name}${message.author.id}`);
            }, command.timeout);
        }

        if (command) command.run(client, message, args);
    }
}