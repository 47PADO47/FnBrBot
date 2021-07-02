const {
    text,
    style
} = require('./console-colors');
const fetch = require('node-fetch');

module.exports = class Util {
    constructor() {

    }

    /**
     * @returns {Object} all the cosmetics in game
     */
    LoadCosmetics() {

        const url = 'https://fortnite-api.com/v2/cosmetics/br';

        fetch(url)
            .then(res => res.json())
            .then(json => {
                success('Loaded cosmetics')
                return this.data = json.data;
            })
            .catch(e => error(e.message))

        return this;
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