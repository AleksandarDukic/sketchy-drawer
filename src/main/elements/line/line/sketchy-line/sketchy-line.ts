import type { Position } from "../../../../models";
import { calculatePerturbedPoints, calcLineMidPoint, calculateDeviantPointLocation } from "../../../../util/line";
import { calcOffsetPoints } from "../../../../util/point-offset";
import type { SketchyLine } from "./sketchy-line.interface";

export function createSketchyLine(start: Position, end: Position): SketchyLine  {
    const path = createSketchyLinePath(start, end);

    return {
        start: start,
        end: end,
        path,
        draw: drawLine
    }
}

function drawLine(this: SketchyLine ,ctx: CanvasRenderingContext2D) {
    ctx.stroke(this.path);
}



function createSketchyLinePath(start: Position, end: Position): Path2D {

    const [calcStart, calcEnd] = calcOffsetPoints(start, end);
    const midPoint = calcLineMidPoint(start, end);

    const perturbedPoints: Position[] = calculatePerturbedPoints(start, midPoint);
   
    const pertubedLinePath = new Path2D();
    pertubedLinePath.moveTo(perturbedPoints[0].x, perturbedPoints[0].y);
    pertubedLinePath.lineTo(perturbedPoints[1].x, perturbedPoints[1].y);

    const deviantPoint = calculateDeviantPointLocation(midPoint, end);
    const deviantPointPath = new Path2D(pertubedLinePath);
    deviantPointPath.moveTo(deviantPoint.x + 7.5, deviantPoint.y );
    deviantPointPath.arc(deviantPoint.x, deviantPoint.y, 7.5, 0, 2*Math.PI, true);


    const path = new Path2D(deviantPointPath);
    
    path.rect(calcStart.x -2 , calcStart.y -2 , 4, 4);
    path.moveTo(calcStart.x, calcStart.y);

    path.lineTo(calcEnd.x, calcEnd.y);
    path.arc(calcEnd.x - (calcEnd.x < calcStart.x ? -1 : 1), calcEnd.y - (calcEnd.y < calcStart.y ? -1 : 1), 2, 0 , 2*Math.PI, true)
    return path;
}