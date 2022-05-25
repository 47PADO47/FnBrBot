const { BaseMessage } = require("fnbr");
const Client = require("./Client");

/**
 * @param {Client} client
 * @param {BaseMessage} message
 * @param {string[]} args
 */
async function RunFunction(client, message, args) {}

class Command {
    /**
     * @typedef {{name: string, description: string, usage: string, aliases: string[], args: boolean, minArgs: number, maxArgs: number, timeout: number, ownerOnly: boolean, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name || "";
        this.description = options.description || "";
        this.usage = options.usage ? `${this.name} ${options.usage}` : `${this.name}`;
        this.aliases = options.aliases || null;
        this.args = options.args || false;
        this.minArgs = options.minArgs || null;
        this.maxArgs = options.maxArgs || null;
        this.timeout = options.timeout ? options.timeout*1000 : 0;
        this.ownerOnly = options.ownerOnly || false;
        this.run = options.run;
    };
};

module.exports = Command;