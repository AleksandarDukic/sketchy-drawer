import type { Position } from "../../../models/position.interface";
import type { SketchyElement } from "../../sketchy-element.interface";

export interface Line extends SketchyElement {
    start: Position,
    end: Position,
    path: Path2D
}