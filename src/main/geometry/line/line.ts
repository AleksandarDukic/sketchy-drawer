import type { LineAttributes } from "../../models/geometry/attributes";
import { BaseGeometry } from "../base/base";

export class LineGeometry extends BaseGeometry<LineAttributes> implements LineGeometry {
    path: Path2D = new Path2D();
    constructor(length: number) {
        super(length)
        console.log("Line Geometry \t --Constructor--");
        this.createPath();
    }

    createPath(): void {
        const p = new Path2D();
        p.moveTo(0, 0);
        p.lineTo(this.attributes, 0);
        this.path = p;
    }
}