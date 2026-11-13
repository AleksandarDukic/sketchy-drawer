import type { IBaseGeometry } from "./base-interface"

export interface IBaseGeometryPrototype {
    getAttributes: () => IBaseGeometry,
    getPath: () => Path2D,
    update: () => void,
    generatePath: () => void
}