import type { IGeometry } from "../base";

export interface IPointGeometry extends IGeometry {
    attributes: {
        x: number,
        y: number
    }
}