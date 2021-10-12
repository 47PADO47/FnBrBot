const Client = require('./src/core/Client');
const config = require('./config.json');
const { readFileSync } = require('fs');

const client = new Client(config, LoadAuth());

client.login();

function LoadAuth () {
    const json = {
        "checkEULA": true
    };
    const deviceAuth_path = `${process.cwd()}/temp/deviceAuth.json`;

    try {
        json.deviceAuth = JSON.parse(readFileSync(deviceAuth_path));
    } catch (e) {
        json.authorizationCode = async () => await Client.consoleQuestion('Please input an authorization code:\n');
    }
    return json
};