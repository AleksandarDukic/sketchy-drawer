/* import { createPoint } from "../Point/point-factory";
import type { LineGeometry } from "./line-geometry";
import type { LineProps, LinePropsDec, LinePropsRad } from "./line-props";


export function createLine(props: LinePropsDec): LineGeometry;
export function createLine(props: LinePropsRad): LineGeometry;

export function createLine(props: LineProps): LineGeometry {
    
    if (props.pointB === undefined) {
        const pointB = createPoint([props.pointA[0] + length * Math.sin(props.angle), props.pointA[1] + length * Math.cos(props.angle)]);
    }

    return {
        props.pointA,
        props.pointB | pointB
    }
}

 */