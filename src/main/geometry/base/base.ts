import type { Attributes, BaseAttributes } from "../../models/geometry/attributes";
import type { BaseGeometry as IBaseGeometry } from "./base.interface";

export abstract class BaseGeometry<TAttribute extends Attributes = BaseAttributes> implements IBaseGeometry<TAttribute>{
    path: Path2D = new Path2D(); 
    attributes: TAttribute;
    constructor(attributes: TAttribute) {
        this.attributes = attributes;
        console.log("Base Geometry \t --Constructor--")
    };
}


