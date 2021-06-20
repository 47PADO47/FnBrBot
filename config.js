require('dotenv').config();
const { Enums } = require('fnbr');

module.exports = {
    "options": {
        "status": "🛹 Battle Royale Lobby - 1/16",
        "platform": Enums.Platform.SWITCH,
        "keepAliveInterval": 50,
        "cachePresences": false,
        "auth": {
            "checkEULA": true,
            "authorizationCode": process.env.authorizationCode
        },
        "partyConfig": {
            "privacy": Enums.PartyPrivacy.PRIVATE,
            "joinConfirmation": false,
            "joinability": "OPEN",
            "maxSize": 16,
            "chatEnabled": true
        },
        "kairos": {
            "cid": "",
            "color": Enums.KairosColor.LIME
        }
    },
    "cosmetics": {
        "outfit": "CID_028_Athena_Commando_F",
        "backpack": "BID_004_BlackKnight",
        "pickaxe": "Pickaxe_Lockjaw",
        "emote": "",
        "banner": "otherbanner27",
        "level": "999"
    }
}