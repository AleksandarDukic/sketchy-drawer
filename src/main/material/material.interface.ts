import type { Matter } from "../models/material/matter/matter.interface";
import type { MaterialStyle } from "../models/material/style/style.interface";

export interface IMaterial {
    style: MaterialStyle,
    matter: Matter
}