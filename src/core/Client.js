const { Client, Enums } = require('fnbr');
const Util = require('./Util');
const { readdirSync } = require('fs');

module.exports = class BotClient extends Client {
    constructor(config, auth) {
        super({
            "defaultStatus": config.status,
            "platform": config.platform,
            "xmppKeepAliveInterval": 50,
            "cachePresences": false,
            "auth": auth,
            "partyConfig": {
                "privacy": Enums.PartyPrivacy.PUBLIC,
                "joinConfirmation": false,
                "joinability": "OPEN",
                "maxSize": 16,
                "chatEnabled": true
            },
            "defaultOnlineType": Enums.PresenceOnlineType.ONLINE,
        });
        
        ["commands", "aliases", "timeout"].forEach(e => {
            this[e] = new Map();
        });

        readdirSync(`${process.cwd()}/src//handlers`).forEach(e => {
            require(`${process.cwd()}/src/handlers/${e}`)(this);
        });

        this.util = new Util();
        this.logger = this.util.logger;

        (async () => {
            if (!await this.util.CheckCosmetics()) return process.exit();
            await this.util.DownloadCosmetics();
            
            setTimeout(async () => {
                this.cosmetics = require(`${process.cwd()}/temp/cosmetics.json`);
            }, 5*1000);
        })();
        
        this.settings = config;
        
        this.status = config.skipLibCheck ? true : this.util.CheckVersion();
    }

    async login () {
        this.status ? await super.login() : process.exit();
    }
}