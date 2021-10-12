const { text, style } = require('./console-colors');
const { writeFileSync, readFileSync, existsSync, mkdirSync } = require('fs');
const fetch = require('node-fetch');
const Logger = require('./Logger');

module.exports = class Util {
    constructor() {
        this.logger = new Logger();
    };

    /**
     * Download and saves all the cosmetics in-game
     * @returns {Promise}
     */
    DownloadCosmetics() {

        const url = 'https://fortnite-api.com/v2/cosmetics/br';

        fetch(url)
            .then(res => res.json())
            .then(async json => {
                await writeFileSync(`${process.cwd()}/temp/cosmetics.json`, JSON.stringify(json?.data, null, 2));
                return this.logger.success('Downloaded all cosmetics');
            })
            .catch(e => this.logger.error(e.message));
    };

    /**
     * Checks if there are cosmetics
     * @returns {Boolean | Promise}
     */
    async CheckCosmetics() {
        const file_path = `${process.cwd()}/temp/cosmetics.json`;
        const file = file_path.split('/').pop();
        const dir = file_path.substr(0, file_path.length - file.length);

        if (existsSync(dir) && existsSync(file_path)) {
            this.logger.success(`"${file}" has been found`);
            return true;
        } else {
            this.logger.error(`Can't find a file named "${file}" in "${dir}" dir, creating one...`);
            
            if (!existsSync(dir)) {
                await mkdirSync(dir);
                this.logger.success(`Created "${dir}" dir`);
            };
            await writeFileSync(file_path, '[]');
            this.logger.success(`Created "${file}" file`);

            this.logger.warn('Please restart the bot');
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
                this.logger.debug(`Checking the library version... (v${current})`);

                const latest = json.latest;
                if (current !== latest) {
                    this.logger.warn(`You are using an older version of the "fnbr" library, please update it via the "${text.red}npm install fnbr@latest${style.reset}" command!`);
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
    FindCosmetic(cosmetics, query, type) {
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