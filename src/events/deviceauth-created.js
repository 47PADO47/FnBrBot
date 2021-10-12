const { writeFileSync } = require('fs');

module.exports = {
    run: async (client, data) => {

        writeFileSync(`${process.cwd()}/temp/deviceAuth.json`, JSON.stringify(data, null, 2))
        client.logger.success(`Created deviceAuth.json file`);
        
    }
}