import type { SketchyElement } from "../../elements/sketchy-element.interface";
export interface Scene {
    getElements: () => SketchyElement[];
    add: (element: SketchyElement) => void,
}