export const lockerOptions = ["Outfit", "Backpack", "Pickaxe", "Emote", "Emoji"] as const;
type LockerOptions = typeof lockerOptions[number];

type Cosmetic = {
    name: string;
    type: {
        value: Lowercase<LockerOptions>;
    },
    id: string;
};

type SearchCosmeticOptions = {
    query: string,
    type: Pick<Pick<Cosmetic, 'type'>['type'], 'value'>['value'];
};

export type {
    Cosmetic,
    SearchCosmeticOptions,
    LockerOptions,
}