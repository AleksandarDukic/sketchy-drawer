//import type { Geometry } from "../../geometry/geometry.interface";
import type { Material } from "../../material/material.type";

export interface BaseElement {
    material: Material,
    path: Path2D,
    geometry: any,
    underlayElements: BaseElement[],
    overlayElements: BaseElement[],
}