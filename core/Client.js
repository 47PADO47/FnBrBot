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
        
        this.logger = new Logger();
        this.util = new Util();
        this.cosmetics = this.util.LoadCosmetics();
        this.settings = config;

        ["commands", "aliases", "timeout"].forEach(e => {
            this[e] = new Map();
        });

        ["events", "commands"].forEach(e => {
            require(`${process.cwd()}/handlers/${e}`)(this);
        });
    }

    async login () {
        await super.login();
    }
}