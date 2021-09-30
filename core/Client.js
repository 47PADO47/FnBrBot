const { Client, Enums } = require('fnbr');
const Logger = require('./Logger');
const Util = require('./Util');

module.exports = class BotClient extends Client {
    constructor(config, auth) {
        super({
            "status": config.status,
            "platform": config.platform,
            "keepAliveInterval": 50,
            "cachePresences": false,
            "auth": auth,
            "partyConfig": {
                "privacy": Enums.PartyPrivacy.PUBLIC,
                "joinConfirmation": false,
                "joinability": "OPEN",
                "maxSize": 16,
                "chatEnabled": true
            },
            "kairos": {
                "color": Enums.KairosColor.LIME
            },
        });
        
        ["commands", "aliases", "timeout"].forEach(e => {
            this[e] = new Map();
        });

        ["events", "commands"].forEach(e => {
            require(`${process.cwd()}/handlers/${e}`)(this);
        });

        this.logger = new Logger();
        this.util = new Util();
        this.util.DownloadCosmetics();
        this.cosmetics = require(`${process.cwd()}/cosmetics.json`);//this.util.LoadCosmetics();
        this.settings = config;
    }

    async login () {
        await super.login();
    }
}