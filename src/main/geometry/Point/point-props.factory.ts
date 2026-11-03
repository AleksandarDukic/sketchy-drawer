import type { PointGeometry } from "./point-props.type";

export function createPoint(x: number, y: number): PointGeometry {
    return {
        x: x,
        y: y,
    }
}