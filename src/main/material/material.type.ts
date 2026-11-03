export type Material = {
    matter: Matter,
    color: string
}

export const _Matter = {
    Stroke: "Stroke",
    Fill: "Fill"
} as const;

export type Matter = typeof _Matter[keyof typeof _Matter]
