import type { PositionProps } from "../../models/position-props.interface";

export interface IBaseElement {
    setPosition(position: PositionProps): void;
}