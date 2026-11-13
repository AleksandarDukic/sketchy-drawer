import type { Material } from "../../material/material.type";
import type { BaseElement } from "./base-element.interface";

export function createBaseElement(geometry: any, material: Material) {

    // const chainedBaseElement = Object.create(protoBaseElement, 
    //     {
    //         material: {value: material, writable: true, enumerable: true },
    //         geometry: {value: geometry, writable: true, enumerable: true },
    //         path: {value:  new Path2D, writable: true, enumerable: true },
    //         underlayElements: {value: [] as BaseElement[], writable: true, enumerable: true },
    //         overlayElements: {value: [] as BaseElement[], writable: true, enumerable: true },
    //     }) as BaseElement & ProtoBaseElement
    
    
    
}

// !@# ideja - za kreiranje geometrije koristiti tuples i onda moze kao argument tuple1 | tuple2