import type { Material, Matter } from "./material.type";
import { _Matter } from "./material.type";

export const materialFactory = {
    createMaterial: createMaterial
}

function createMaterial(matter: Matter = _Matter.Stroke, color: string = "black"): Material {
    return {
        matter,
        color
    };
}