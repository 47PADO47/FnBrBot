import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class EmoteCommand extends Command {
    constructor() {
        super({
            name: 'emote',
            description: 'Change the bot\'s emote',
            usage: `{name || id}`,
            aliases: ['dance'],
            args: true,
            minArgs: 0,
            maxArgs: 0,
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        const emote = client.findCosmetic({
            query: args.join(" "),
            type: "emote",
        });

        if (!emote) {
            message.reply(`Could not find a emote named "${args.join(" ")}"`);
            return;
        }
        client.party.me.setEmote(emote.id);
        message.reply(`Set emote to "${emote.name}"`);

        return;
    }
}

export default new EmoteCommand;