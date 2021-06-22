const { readdirSync } = require("fs");
const ascii = require("ascii-table");

let table = new ascii("Events");
table.setHeading("Event Name", "Loaded Status");

module.exports = (client) => {
    const events = readdirSync(`${process.cwd()}/events/`).filter(file => file.endsWith(".js"));
    for (let file of events) {
      try {
        let pull = require(`${process.cwd()}/events/${file}`);
        if (pull.event && typeof pull.event !== "string") {
          table.addRow(file, `❌ -> Property event should be string.`);
          continue;
        }
        pull.event = pull.event || file.replace(".js", "");
        
        client.on(pull.event.replace('-', ':'), pull.run.bind(null, client));
        table.addRow(file, "✅");
      } catch (err) {
        console.log("");
        client.logger.error(err.message);
        table.addRow(file, `❌ -> Error`);
      }
    }
    console.log(table.toString());
  };