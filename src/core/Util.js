const { text, style } = require('./console-colors');
const { writeFileSync, readFileSync, existsSync } = require('fs');
const fetch = require('node-fetch');
const Logger = require('./Logger');
const cosmetics = require(`${process.cwd()}/cosmetics.json`) || [];

module.exports = class Util {
    constructor() {
        this.logger = new Logger();
    }

    /**
     * Download and saves all the cosmetics in-game
     * @returns {Promise}
     */
    DownloadCosmetics() {

        const url = 'https://fortnite-api.com/v2/cosmetics/br';

        fetch(url)
            .then(res => res.json())
            .then(async json => {
                await writeFileSync(`${process.cwd()}/cosmetics.json`, JSON.stringify(json.data, null, 2));
                return this.logger.success('Downloaded latest cosmetics');
            })
            .catch(e => this.logger.error(e.message));
    };

    /**
     * Load the downloaded cosmetics
     * @returns {Object | Promise} All the cosmetics in-game
     */
    async LoadCosmetics() {
        const path = `${process.cwd()}/cosmetics.json`;

        if (existsSync(path)) {
            this.logger.success('Loaded cosmetics');
            return cosmetics;
        } else {
            this.logger.error(`Can't find a dir named "${path}"`);
            return process.exit();
        };
    };

    /**
     * Check if the "fnbr" library version installed is the latest
     * @returns {Boolean | Promise}
     */
    CheckVersion() {
        const current = JSON.parse(readFileSync(`${process.cwd()}/package.json`)).dependencies.fnbr.replace('^', '');
        const url = 'https://registry.npmjs.org/-/package/fnbr/dist-tags';

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.logger.debug(`Checking the library version... (v${current})`)

                const latest = json.latest;
                if (current !== latest) {
                    this.logger.warn(`You are using an older version of the "fnbr" library, please update it with the "${text.red}npm install fnbr@latest${style.reset}" command!`);
                    return process.exit();
                } else {
                    this.logger.success(`You have the latest library version`);
                };
            });

        return true;
    };

    /**
     * Search for a cosmetic
     * @param {String} query The name or id of cosmetic to search
     * @param {String} type The type of cosmetic to search
     * @returns {Object} The cosmetic object
     */
    FindCosmetic(query, type) {
        return cosmetics.find((cosmetic) => (cosmetic.id.toLowerCase() === query.toLowerCase() || cosmetic.name.toLowerCase() === query.toLowerCase()) && cosmetic.type.value === type);
    };

    /**
     * 
     * @param {Number} bytes bytes to format
     * @returns {String} formatted bytes
     */
    FormatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
    };

};