const { writeFileSync } = require('fs');

module.exports = {
    run: async (client, data) => {

        writeFileSync(`${process.cwd()}/temp/refreshToken`, data.token);
        client.logger.success(`Created "/temp/refreshToken" file`);
        
    }
}