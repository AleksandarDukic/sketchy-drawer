/* import { createPoint } from "../Point/point-factory";
import type { PointGeometry } from "../Point/point-props";
import type { RectGeometry } from "./rect-props.type";


export function createRectDec(A: PointGeometry, B: PointGeometry, C: PointGeometry, D: PointGeometry): RectGeometry
{
    return {
        A,
        B,
        C,
        D
    };
};

export function createRectPolar(A: PointGeometry, a: number, b: number, tetha: number): RectGeometry {
    const B = createPoint(A.x + Math.cos(tetha), A.y + Math.sin(tetha));
    const C = createPoint(B.x + Math.sin(tetha), A.y + Math.cos(tetha))
    const D = createPoint(A.x + Math.sin(tetha), A.y + Math.cos(tetha));
    
    return {
        A,
        B,
        C,
        D
    };
};
 */