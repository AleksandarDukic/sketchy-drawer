import type { ControlPoint } from "../models/control-point.interface"
import type { Position } from "../models/position.interface"

export const canvasUtil = {
    createControlPoint: (position: Position, radius: number = 3, color: string = "red"): ControlPoint => {
        return {
            position,
            radius,
            color
        }
    },
    drawControlPoint: (ctx: CanvasRenderingContext2D, controlPoint: ControlPoint, ) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(controlPoint.position.x, controlPoint.position.y, controlPoint.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = controlPoint.color;
    ctx.fill();
    ctx.restore();
    }
}