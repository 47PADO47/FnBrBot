import { ICommand, CommandRunOptions, CommandOptions } from "../types/command";

abstract class Command implements ICommand {
  name: string;
  description: string;
  usage: string;
  aliases?: string[];
  args: boolean;
  minArgs?: number;
  maxArgs?: number;
  timeout: number;
  ownerOnly: boolean;

  constructor(options: CommandOptions) {
    this.name = options.name;
    this.description = options.description || '';
    this.usage = options.usage ? `${this.name} ${options.usage}` : `${this.name}`;
    this.aliases = options.aliases || undefined;
    this.args = options.args || false;
    this.minArgs = options.minArgs || undefined;
    this.maxArgs = options.maxArgs || undefined;
    this.timeout = options.timeout ? options.timeout * 1000 : 0;
    this.ownerOnly = options.ownerOnly || false;
    this.run = options.run || this.run;
  }

  async run(_options: CommandRunOptions): Promise<void> {
    throw new Error('Not implemented');
  }
}

export default Command;
