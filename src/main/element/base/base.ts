import type { BaseGeometry } from "../../geometry";
import type { Material } from "../../material/material";
import type { IMaterial } from "../../material/material.interface";
import type { Position } from "../../models";
import type { PositionProps } from "../../models/position-props.interface";
import type { IBaseElement } from "./base.interface";

export class BaseElement implements IBaseElement {
    constructor(private geometry: BaseGeometry, private material: Material, private position: Position = {x: 0, y: 0}, private rotation: number = 0) {
        this.material = material;
    }
    setPosition(position: PositionProps): void {
        this.position = {
            x: position[0],
            y: position[1]
        }
    };

    getPosition() {
        return [this.position.x, this.position.y]
    }

    getRotation() {
        return this.rotation;
    }

    getGeometry(): BaseGeometry {
        return this.geometry;
    }
    getMaterial(): IMaterial {
        return this.material;
    }

}