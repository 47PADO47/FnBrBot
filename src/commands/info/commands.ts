import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command";

class CommandsCommand extends Command {
  constructor() {
    super({
      name: 'commands',
      description: 'Retrive all the bot commands',
      usage: `[commandName]`,
      args: true,
    })
  }

  async run({ client, message, args }: CommandRunOptions) {
    const cmd = (args[0] || "").toLowerCase();
    if (cmd.length === 0) {
      const commands = Array.from(client.commands.values());

      const menu = [
        '- Help Menu | Commands',
        `Use ${client.settings.prefix}commands followed by a command name to get additional info on it`,
        commands
          .map(c => `- ${c.name}, ${c.aliases ? c.aliases.toLocaleString() : 'no aliases'}`)
          .join('\n'),
      ]

      message.reply(menu.join('\n'));
      return;
    }

    const command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(cmd) || "");

    if (!command) {
      message.reply(`Can't find a command with the name "${args[0]}"`);
      return;
    }

    const menu = [
      `- Help Menu | "${args[0]}"`,
      `Command`,
      `> Name: ${command.name ? command.name : "No name"}`,
      `> Aliases: ${command.aliases ? command.aliases.join(',') : "No aliases"}`,
      `> Usage: ${command.usage ? client.settings.prefix + command.usage : "No usage"}`,
      `> Description: ${command.description ? command.description : "No description"}`,
    ];
    
    message.reply(menu.join('\n'));
    return;
  }
}

export default new CommandsCommand;