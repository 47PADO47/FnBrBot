import Command from "../../core/command";
import { CommandRunOptions } from "../../types/command"

class EmojiCommand extends Command {
    constructor() {
        super({
            name: 'emoji',
            description: 'Change the bot\'s emoji',
            usage: `{name || id}`,
            args: true,
            minArgs: 0,
            maxArgs: 0,
            timeout: 5,
        })
    }

    async run({ client, message, args }: CommandRunOptions) {
        if (!client.party) return;
        const emoji = client.findCosmetic({
            query: args.join(" "),
            type: "emoji",
        });

        if (!emoji) {
            message.reply(`Could not find a emoji named "${args.join(" ")}"`);
            return;
        }
        client.party.me.setEmoji(emoji.id);
        message.reply(`Set emoji to "${emoji.name}"`);

        return;
    }
}

export default new EmojiCommand;