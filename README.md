# FnBrBot

A powerful fortnite lobby bot written in TypeScript and powered by the [fnbr](https://fnbr.js.org) library

# Installation
1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Download and extract the repo or git clone it
3. Open the terminal and go into the unzipped directory
4. Type `npm install` and wait
5. Rename `.env.example` to `.env` and fill the values to fit your needs
6. Build the bot via the `npm run build` command
7. Run the bot via the `npm run start` command
8. Get an authorization code from **[here](https://www.epicgames.com/id/logout?redirectUrl=https%3A//www.epicgames.com/id/login%3FredirectUrl%3Dhttps%253A%252F%252Fwww.epicgames.com%252Fid%252Fapi%252Fredirect%253FclientId%253D3446cd72694c4a4485d81b77adbb2141%2526responseType%253Dcode)**
9. Paste the authorization code when asked and your bot should log-in

# Configuration
The bot configuration can be edited inside the `src/config.ts` file

*In order to load the .env file, you must have Node.js >= 20.6.0 installed,
otherwise simply hardcode them in the config.ts file*