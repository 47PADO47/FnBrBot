import { Client, AuthOptions } from 'fnbr';
import { readFileSync } from 'fs';
import { existsOrCreate, getTemp } from './fs';

const load = (): AuthOptions => {
    const options: AuthOptions = {
        checkEULA: true,
    };

    try {
        existsOrCreate(getTemp());
        
        const refreshTokenPath = getTemp(`refreshToken`);
        options.launcherRefreshToken = readFileSync(refreshTokenPath, 'utf-8');
    } catch (e) {
        options.authorizationCode = async () => await Client.consoleQuestion('[❓] Please input an authorization code:\n');
    }
    
    return options;
}

export {
    load,
}