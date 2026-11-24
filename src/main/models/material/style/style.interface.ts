export const MaterialStyle = {
    Fill: 'Fill',
    Stroke: 'Stroke',
} as const;

export type MaterialStyle = typeof MaterialStyle[keyof typeof MaterialStyle] 
