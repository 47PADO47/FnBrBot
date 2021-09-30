const { text, style } = require('./console-colors');
const { writeFileSync, readFileSync, existsSync } = require('fs');
const fetch = require('node-fetch');

module.exports = class Util {
    constructor() {

    }

    /**
     * @returns {Promise} Download and saves all the cosmetics in game
     */
    DownloadCosmetics() {

        const url = 'https://fortnite-api.com/v2/cosmetics/br';

        fetch(url)
            .then(res => res.json())
            .then(async json => {
                await writeFileSync(`${process.cwd()}/cosmetics.json`, JSON.stringify(json.data, null, 2));
                return success('Downloaded latest cosmetics');
            })
            .catch(e => error(e.message));
    };

    /**
     * @returns {Object} Load the downloaded cosmetics
     */
    async LoadCosmetics() {
        const path = `${process.cwd()}/cosmetics.json`;

        if (existsSync(path)) {
            success('Loaded cosmetics');
            return JSON.parse(readFileSync(`${process.cwd()}/cosmetics.json`));
        } else {
            error(`Can't find a dir named "${path}"`);
            return process.exit();
        };
    };

    /**
     * 
     * @param {Number} bytes bytes to format
     * @returns {String} formatted bytes
     */
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
    };

};

function success(str) {
    console.log(`[${text.green}✔${style.reset}]`, `${str}`);
};

function error(str) {
    console.log(`[${text.red}✖${style.reset}]`, `${str}`);
};