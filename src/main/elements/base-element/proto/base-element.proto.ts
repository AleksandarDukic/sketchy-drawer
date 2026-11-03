import type { Geometry } from "../../../geometry/geometry.interface";
import { createPath } from "./functions/path.factory";

export type ProtoBaseElement = {
    createPath: <TGeometry extends Geometry>(geometry: TGeometry) => Path2D;
}

export const protoBaseElement: ProtoBaseElement = {
    createPath: createPath
}