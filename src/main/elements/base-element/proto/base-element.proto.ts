import type { BaseElement } from "../base-element.interface";

export type ProtoBaseElement = {
    addOverlayElement: (element: BaseElement) => void;
    addUnderlayElement: (element: BaseElement) => void
    // removeOverlayElement(??? id ???)
    // removeUnderlayElement(??? id ???)
    // 
    
}
