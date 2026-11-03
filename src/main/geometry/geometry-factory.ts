import { createLineDec, createLineRad } from "./Line/line-props.factory";
import { createPoint } from "./Point/point-props.factory";
import { createRectDec, createRectPolar } from "./Rect/rect-props.factory";
import { createTriangleDec, createTrianglePolar } from "./Triangle/triangle-props.factory";


export const geometryFactory = {
    createPoint: createPoint,
    createLineDec: createLineDec,
    createLinePolar: createLineRad,
    createRectDec: createRectDec,
    createRectPolar: createRectPolar,
    createTrianlgeDec: createTriangleDec,
    createTrianlgePolar: createTrianglePolar
}