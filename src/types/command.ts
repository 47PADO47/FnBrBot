import { PartyMessage, ReceivedFriendMessage } from 'fnbr';
import BotClient from '../core/client';

type CommandRunOptions = {
    client: BotClient;
    message: ReceivedFriendMessage | PartyMessage;
    args: string[];
}

type CommandRunFunction = {
    (options: CommandRunOptions): Promise<void>;
}

type CommandOptions = {
    name: string;
    description?: string;
    usage?: string;
    aliases?: string[];
    args?: boolean;
    minArgs?: number;
    maxArgs?: number;
    timeout?: number;
    ownerOnly?: boolean;
    run?: CommandRunFunction;
}

interface ICommand {
  name: string;
  description: string;
  usage: string;
  aliases?: string[];
  args: boolean;
  minArgs?: number;
  maxArgs?: number;
  timeout: number;
  ownerOnly: boolean;
}

export type {
    ICommand,
    CommandOptions,
    CommandRunOptions,
}