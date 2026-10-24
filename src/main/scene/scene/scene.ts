import type { SketchyElement } from "../../elements/sketchy-element.interface";
import type { Scene } from "./scene.interface";

export function createScene(): Scene {

    const elements: SketchyElement[] = [];

    const scene : Scene = {
        getElements: () => {
            return elements;
        },
        add: (element: SketchyElement) => {
           elements.push(element);
        }
    }
    return scene;
}