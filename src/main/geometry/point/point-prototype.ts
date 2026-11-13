import { BaseGeometryPrototype } from "../base";
import type { IPointGeometry } from "./point-interface";
import type { IPointGeometryPrototype } from "./point-prototype.interface";

export const PointGeometryPrototype: IPointGeometryPrototype =

    Object.create(
        BaseGeometryPrototype, {
            // update: {
            //     value: function(this: IPointGeometry): void {
            //         console.log("Point Prototype update: ",this)
            //     }
            // }
        });