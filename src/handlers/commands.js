const { readdirSync } = require("fs");
const ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("Command Name", "Loaded Status");

module.exports = (client) => {
    readdirSync(`${process.cwd()}/src/commands/`).forEach(dir => {
        const commands = readdirSync(`${process.cwd()}/src/commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`${process.cwd()}/src/commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(pull.name, '✅');
            } else {
                table.addRow(pull.name, `❌  -> missing a command.name, or command.name is not a string.`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());
}