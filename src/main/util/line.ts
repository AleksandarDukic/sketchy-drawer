import { DEVIANT_POINT_LOCATION_AREA, PERTURBED_POINT_ROUGNESS, POINT_RADIUS_ROUGHNESS } from "../constants";
import type { Position } from "../models";

/** Given a straight line's start and end position
 *  calculate it's length
 *  @return number - length of the line.
 */
export function calcLineLength(start: Position, end: Position) {
    let cathetusX = Math.abs(start.x - end.x);
    let cathetusY = Math.abs(start.y - end.y);

    let hypotenuse = Math.sqrt(cathetusX ** 2 + cathetusY ** 2);
    return hypotenuse;
}

/** Given a straight line's start and end position
 *  calculate it's mid-point
 *  @return {x: number, y: number} - Position of the line
 */
export function calcLineMidPoint(start: Position, end: Position): Position {
    return { x: (start.x + end.x) / 2, y: (start.y + end.y)/2 } 
}


/** P9
 *  @return y coordinates of simplified line.
 */
export function calculatePerturbedPoints(start: Position, midPoint: Position): Position[] {

    const random = Math.random();
    const sign = random >= 0.5 ? 1 : -1;
    const roughness = PERTURBED_POINT_ROUGNESS * random;

    const cathetusX = midPoint.x - start.x;
    const cathetusY = midPoint.y - start.y;

    const deltaX = cathetusY * roughness;
    const deltaY = cathetusX * roughness;

    const perturbedPoint1: Position = {x: midPoint.x + sign* deltaX, y: midPoint.y - sign*deltaY}
    const perturbedPoint2: Position = {x: midPoint.x - deltaX, y: midPoint.y + deltaY}

    return [perturbedPoint1, perturbedPoint2];

}


/** Given a line Starting Point and Mid Point calculates a Pertubered Point
 *  @return Pertubered Point
 */
export function calculatePerturbedPoint(start: Position, midPoint: Position): Position {
    const random = Math.random();
    const sign = random >= 0.5 ? 1 : -1;
    const roughness = PERTURBED_POINT_ROUGNESS * random;

    const cathetusX = midPoint.x - start.x;
    const cathetusY = midPoint.y - start.y;

    const deltaX = cathetusY * roughness;
    const deltaY = cathetusX * roughness;

    const perturbedPoint1: Position = {x: midPoint.x + sign* deltaX, y: midPoint.y - sign*deltaY}

    return perturbedPoint1;
}

/** Given a line Ending Point and Mid Point calculates a Deviant Point
 *  @return Pertubered Point
 */
// export function calculateDeviantPoint(midPoint: Position, end: Position): Position {
//     return {x: 0, y: 0};
// }


/** Given a line Ending Point and Mid Point calculates a Deviant Point location
 *  Deviant Point Location is a random Point between 70% and 80% of the line
 *  which is between 40% and 60% of the second half of the line
 *  @return Pertubered Point
 */
export function calculateDeviantPointLocation(midPoint: Position, end: Position): Position {

    // lenght of input parameters' line
    const halfLineLength = calcLineLength(midPoint, end);
    console.log(halfLineLength);

    // 40% - 60% of half-line (input line)
    const percentageOffset = DEVIANT_POINT_LOCATION_AREA.END - DEVIANT_POINT_LOCATION_AREA.START;

    // random number betwee 40% and 60%
    const deviantPointPercentageOffset = DEVIANT_POINT_LOCATION_AREA.START + Math.random() * percentageOffset;
    console.log("% :", deviantPointPercentageOffset);

    // Perpendicular Distance of Deviation Point from Line
    const deviantPointDistancOffset = POINT_RADIUS_ROUGHNESS * Math.random();
    console.log("r :", deviantPointDistancOffset);
    const sign = Math.random() >= 0.5 ? 1 : -1;

    const deviantPointDistance = halfLineLength * deviantPointPercentageOffset / 100;
    console.log("deviant Point Projection Distance", deviantPointDistance)

    const cathetusX = end.x - midPoint.x;
    const cathetusY = end.y - midPoint.y;

    const deviantPointProjectionPosition = {
        x: midPoint.x + cathetusX * deviantPointDistance / halfLineLength,
        y: midPoint.y +  cathetusY * deviantPointDistance / halfLineLength,
    }
    console.log("Point : ",deviantPointProjectionPosition)


    const deltaX = cathetusY * deviantPointDistancOffset / halfLineLength;
    const deltaY = cathetusX * deviantPointDistancOffset / halfLineLength;
    console.log("Δ:",deltaX, deltaY);
    console.log("\n")
    console.log("\n")

    return {x: deviantPointProjectionPosition.x + sign * deltaX, y: deviantPointProjectionPosition.y + sign * deltaY};
}