import type { BaseElement } from "../element/base/base";

export class Scene {
    elements: BaseElement[] = [];
    constructor(){}
    addElement(element: BaseElement) {
        this.elements.push(element);
    }
    getElements() {
        return  [...this.elements] as const;
    }
}