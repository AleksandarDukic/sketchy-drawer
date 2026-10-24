import type { Position } from "../../../models/position.interface";
import { calcLineMidPoint } from "../../../util/line";
import type { Line } from "./line.interface";

export function createLine(start: Position, end: Position): Line {
    const path = createLinePath(start, end);

    return {
        start: start,
        end: end,
        path,
        draw: drawLine
    };
};

function drawLine(this: Line, ctx: CanvasRenderingContext2D) {
    drawMidPoint(ctx, this.start, this.end);
    ctx.stroke(this.path);
}

function drawMidPoint(ctx: CanvasRenderingContext2D, start: Position, end: Position) {
    const midPoint = calcLineMidPoint(start, end);
    ctx.save();
    ctx.beginPath();
    ctx.arc(midPoint.x, midPoint.y, 3, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();
}

function createLinePath(start: Position, end: Position): Path2D {
    const path = new Path2D();
    path.moveTo(start.x, start.y);
    path.lineTo(end.x, end.y);
    return path;
}