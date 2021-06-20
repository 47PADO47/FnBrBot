const { Client } = require('fnbr');
const Logger = require('./utils/Logger');
const config = require('./config');

const client = new Client(config.options);
client.logger = new Logger();

["events"].forEach(e => {
    require(`./handlers/${e}`)(client)
});

client.login()