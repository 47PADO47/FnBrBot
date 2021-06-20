const { writeFile } = require('fs');

module.exports = {
    run: async (client, data) => {
        writeFile('../deviceAuth.json', JSON.stringify(data, null, 2))
        client.logger.success('Created deviceAuth.json file')
    }
}