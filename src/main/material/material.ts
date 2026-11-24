import type { Matter } from "../models/material/matter/matter.interface";
import { MaterialStyle } from "../models/material/style/style.interface";
import type { IMaterial } from "./material.interface";

export class Material implements IMaterial {
    matter: Matter = { color: "red" }
    style: MaterialStyle = MaterialStyle.Fill;
    constructor(color: string, style: MaterialStyle = MaterialStyle.Fill) {
        this.matter.color = color;
        this.style = style
    }
}