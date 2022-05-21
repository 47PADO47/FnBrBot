# FnBrBot

[![GitHub release](https://img.shields.io/github/v/release/47PADO47/FnBrBot)](https://GitHub.com/47PADO47/FnBrBot/releases/) [![Node js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org) ![Built with ❤️](http://ForTheBadge.com/images/badges/built-with-love.svg)

A powerful fortnite lobby bot written in Node.js and powered by the [fnbr](https://fnbr.js.org) library

# Installation
1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Download and extract the repo or git clone it
3. Open the terminal and go into the unzipped directory
4. Type `npm install` and wait
5. Get an authorization code from **[here](https://www.epicgames.com/id/logout?redirectUrl=https%3A//www.epicgames.com/id/login%3FredirectUrl%3Dhttps%253A%252F%252Fwww.epicgames.com%252Fid%252Fapi%252Fredirect%253FclientId%253D3446cd72694c4a4485d81b77adbb2141%2526responseType%253Dcode)**
6. Run the bot via the `npm run start` or the `node .` command
7. Paste the authorization code when asked and your bot should log-in

# Configuration

The default bot configuration is:
```json
{
  "prefix": "!",
  "ownerIds": ["4c472091dce947ed8274a30ad6459a29"],
  "skipLibCheck": false,
  "status": "🛴",
  "platform": "IOS",
  "outfit": "Skeletara",
  "backpack": "Pursuit",
  "pickaxe": "Driver",
  "emote": "Poki",
  "level": 999
}
```

#### Prefix:
The prefix that is added to messages in order to invoke commands
#### OwnerIds:
A list of the bot owners ids
#### SkipLibCheck:
Choose whether the bot needs to check if you have the latest **[fnbr](https://fnbr.js.org)** library version or not
#### Status:
The status displayed on the friends list. (ex: 1/16 - Battle Royale Lobby)
#### Platform:
The platform the bot will show. ([Platforms](https://fnbr.js.org/#/docs/main/stable/typedef/Platform))
#### Outfif, Backpack, Pickaxe, Emote and Level
Self explanatory
