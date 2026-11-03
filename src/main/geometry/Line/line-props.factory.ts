import { createPoint } from "../Point/point-props.factory";
import type { PointGeometry } from "../Point/point-props.type";
import type { LineGeometry } from "./line-props.type";

export function createLineDec(A: PointGeometry, B: PointGeometry): LineGeometry
{
    return {
        A,
        B,
    };
};

export function createLineRad(A: PointGeometry, l: number, tetha: number): LineGeometry {
    const B = createPoint(A.x + Math.cos(tetha), A.y + Math.sin(tetha));

    return {
        A,
        B,
    };
};
