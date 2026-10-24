import type { Position } from "../models/position.interface";

export function addPoints(a: Position, b: Position): Position {
    return {x: a.x + b.x, y: a.y + b.y};
}