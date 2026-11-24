import type { BaseAttributes } from "../../models/geometry/attributes";
import { BaseGeometry } from "../base/base";

export class PointGeometry extends BaseGeometry<BaseAttributes> {
    path: Path2D = new Path2D();
    attributes: BaseAttributes = {};
    constructor() {
        super({})
        console.log("Point Geometry \t --Constructor--");
        this.createPath();
    }

    createPath(): void {
        const p = new Path2D();
        p.arc(0, 0, 1, 0, Math.PI * 2);
        this.path = p;
    }
}