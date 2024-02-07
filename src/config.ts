import { Platform } from "fnbr/dist/enums/Enums";
import { Config } from "./types/config";

const config: Config = {
    prefix: "!",
    ownerIds: process.env.OWNER_IDS?.split(', ') || [],
    skipLibCheck: false,
    status: "🛴",
    platform: Platform.IOS,
    outfit: "Skeletara",
    backpack: "Pursuit",
    pickaxe: "Driver",
    emote: "Poki",
    level: 999,
};

export default config;