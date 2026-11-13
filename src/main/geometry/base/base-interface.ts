import type { IBaseGeometryPrototype } from "./base-prototype.interface"

export interface IBaseGeometry extends IGeometry{
    attributes: string
}

export interface IGeometry {
    attributes: unknown
}

