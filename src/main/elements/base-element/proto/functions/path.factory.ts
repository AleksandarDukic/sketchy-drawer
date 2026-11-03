import type { Geometry } from "../../../../geometry/geometry.interface";

export function createPath<TGeometry extends Geometry>(geometry: TGeometry) {
    console.log("cao");
    return new Path2D;
}