import type { Position } from "../../../models/position.interface";
import { canvasUtil } from "../../../util/canvas";
import { calcLineMidPoint } from "../../../util/line";
import type { Line } from "./line.interface";

export function createLine(start: Position, end: Position): Line {
    const path = createLinePath(start, end);

    return {
        start: start,
        end: end,
        path,
        //getOrthogonal: () => {return {}},
        draw: drawLine
    };
};

function drawLine(this: Line, ctx: CanvasRenderingContext2D) {
    drawMidPoint(ctx, this.start, this.end);
    ctx.stroke(this.path);
}

function drawMidPoint(ctx: CanvasRenderingContext2D, start: Position, end: Position) {
    const midPoint = calcLineMidPoint(start, end);
    canvasUtil.drawControlPoint(ctx, canvasUtil.createControlPoint(midPoint));
}

function createLinePath(start: Position, end: Position): Path2D {
    const path = new Path2D();
    path.moveTo(start.x, start.y);
    path.lineTo(end.x, end.y);
    return path;
}