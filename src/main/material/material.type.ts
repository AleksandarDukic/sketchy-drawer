export type Material = {
    matter: Matter,
    color: string
}

export const Matter = {
    Stroke: "Stroke",
    Fill: "Fill"
} as const;

export type Matter = typeof Matter[keyof typeof Matter]
