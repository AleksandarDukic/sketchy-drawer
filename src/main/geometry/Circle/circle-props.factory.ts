import type { PointGeometry } from "../Point/point-props.type";
import type { CircleGeometry } from "./circle-props.type";

export function createCirclePropsDec(A: PointGeometry, r: number): CircleGeometry
{
    return {
        A,
        r
    };
};

