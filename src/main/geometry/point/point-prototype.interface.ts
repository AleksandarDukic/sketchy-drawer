import type { IBaseGeometryPrototype } from "../base/base-prototype.interface";
import type { IPointGeometry } from "./point-interface";

export interface IPointGeometryPrototype extends IBaseGeometryPrototype{
    update: (this: IPointGeometry) => void,
    generate: (this: IPointGeometry) => Path2D
}