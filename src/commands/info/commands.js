const Command = require("../../core/Command");
const { readdirSync } = require("fs");

module.exports = new Command({
    name: 'commands',
    description: 'Retrive all the bot commands',
    usage: `[commandName]`,
    args: true,
    run: async (client, message, args) => {
        if (!args[0]) {
            let categories = [];
            let hiddenCategories = ['owner', 'test'];
      
            readdirSync(`${process.cwd()}/src/commands/`).forEach((dir) => {
              if (hiddenCategories.includes(dir) && !client.settings.ownerIds.includes(message.author.id)) return;
              const commands = readdirSync(`${process.cwd()}/src/commands/${dir}/`).filter((file) =>
                file.endsWith(".js")
              );
      
              const cmds = commands.map((command) => {
                let file = require(`${process.cwd()}/src/commands/${dir}/${command}`);
      
                if (!file.name) return `Command without name`;
      
                let name = file.name.replace(".js", "");
      
                return `${name}`;
              });
      
              let data = `> ${dir.toUpperCase()}\n${cmds.length === 0 ? `Dir without commands` : cmds.join(",")}`;
      
              categories.push(data);
            });
      
            return message.author.sendMessage(`\n- Help Menu | Commands\nUse ${client.settings.prefix}commands followed by a command name to get additional info on it\n${categories.join('\n')}`);
          } else {
            const command =
              client.commands.get(args[0].toLowerCase()) ||
              Array.from(client.commands).find(
                (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
              );
      
            if (!command) {
              return message.author.sendMessage(`Can't find a command with the name "${args[0]}"`)
            };

            return message.author.sendMessage(`\n- Help Menu | "${args[0]}" Command\n> Name: ${command.name ? command.name : "No name"}\n> Aliases: ${command.aliases ? command.aliases.join(',') : "No aliases"}\n> Usage: ${command.usage ? client.settings.prefix + command.usage : "No usage"}\n> Description: ${command.description ? command.description : "No description"}`);
          };
    },
});