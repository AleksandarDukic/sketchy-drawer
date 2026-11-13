import type { IBaseGeometry } from "./base-interface";
import { BaseGeometryPrototype } from "./base-prototype";
import type { IBaseGeometryPrototype } from "./base-prototype.interface";
export declare interface BaseGeometry extends IBaseGeometry, IBaseGeometryPrototype {}
interface BaseGeometryConstructor {
    new (): BaseGeometry
    new (a: string): BaseGeometry
}

export const BaseGeometry: BaseGeometryConstructor = 
    function(a: string): BaseGeometry {
        if (!a) a = "123"
        return Object.create(BaseGeometryPrototype, {
            attributes: {value: a}
        }) 
    } as unknown as BaseGeometryConstructor
