import { Platform } from 'fnbr';

type Config = {
    prefix: string;
    ownerIds: string[];
    status?: string;
    platform?: Platform;
    outfit?: string;
    backpack?: string;
    pickaxe?: string;
    emote?: string;
    level?: number;
}

export type {
    Config,
}