/* import { createPoint } from "../Point/point-factory";
import type { PointGeometry } from "../Point/point-props";
import type { TriangleGeometry } from "./triangle-props.type";



export function createTriangleDec(A: PointGeometry, B: PointGeometry, C: PointGeometry): TriangleGeometry
{
    return {
        A,
        B,
        C,
    };
};

export function createTrianglePolar(A: PointGeometry, a: number, b: number, c: number, tetha: number): TriangleGeometry {

    const B = createPoint(A.x + Math.cos(tetha), A.y + Math.sin(tetha));

    const tethaPrim = Math.PI / 2 - tetha;
    const C = createPoint(A.x + Math.cos(tethaPrim), A.y + Math.sin(tethaPrim));

    return {
        A,
        B,
        C,
    };
};
 */