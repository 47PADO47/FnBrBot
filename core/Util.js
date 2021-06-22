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

            let data = {};

            fetch(url)
                .then(res => res.json())
                .then(json => {
                    data = json.data;
                    success('Loaded cosmetics')
                })
                .catch(e => error(e.message))
            
            return data;
            };

        
};

function success(str) {
    console.log(`[${text.green}✔${style.reset}]`, `${str}`);
};

function error(str) {
    console.log(`[${text.red}✖${style.reset}]`, `${str}`);
};