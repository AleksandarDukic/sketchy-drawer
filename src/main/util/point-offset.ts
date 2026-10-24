import { POINT_ANGLE_ROUGHNESS, POINT_RADIUS_ROUGHNESS } from "../constants";
import type { Position } from "../models/position.interface";

export function calcOffsetPoint(point: Position): Position {
    const noiseRadius = Math.random() * POINT_RADIUS_ROUGHNESS;
    const noiseAngle = Math.random() * POINT_ANGLE_ROUGHNESS;

    const noiseX = Math.sin(noiseAngle) * noiseRadius;
    const noiseY = Math.cos(noiseAngle) * noiseRadius;

    return {
        x: point.x + noiseX,
        y: point.y + noiseY
    }
}