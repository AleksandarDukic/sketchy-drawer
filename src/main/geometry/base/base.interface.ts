import type { Attributes, BaseAttributes } from "../../models/geometry/attributes";

export interface BaseGeometry<TAttribute extends Attributes = BaseAttributes> {
    path: Path2D;
    attributes: TAttribute
}