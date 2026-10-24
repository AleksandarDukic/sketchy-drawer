import type { Position } from "../../models/position.interface";
import type { Circle } from "./circle.interface";

export function createCircle(center: Position, radius: number): Circle {
    return {
        center,
        radius
    } as Circle;
}