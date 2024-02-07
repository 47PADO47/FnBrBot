import path from "path";
import { existsSync, mkdirSync } from "fs";

const getDist = (...location: string[]) => path.resolve(process.cwd(), 'dist', ...location);
const getTemp = (...location: string[]) => path.resolve(process.cwd(), '.temp', ...location);

const existsOrCreate = (path: string) => {
    const exists = existsSync(path);
    if (exists) return;

    mkdirSync(path, {
        recursive: true
    });
    return;
};

export {
    getDist,
    getTemp,
    existsOrCreate,
}