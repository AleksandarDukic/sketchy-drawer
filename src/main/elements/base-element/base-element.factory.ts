import type { Geometry } from "../../geometry/geometry.interface";
import type { Material } from "../../material/material.type";
import type { BaseElement } from "./base-element.interface";
import { protoBaseElement, type ProtoBaseElement } from "./proto/base-element.proto";

export function createBaseElement(geometry: Geometry, material: Material) {

    const prototypedBaseElement = Object.create(protoBaseElement, 
        {
            material: {value: material, writable: true, enumerable: true },
            geometry: {value: geometry, writable: true, enumerable: true },
            path: {value:  new Path2D, writable: true, enumerable: true },
            underlayElements: {value: [] as BaseElement[], writable: true, enumerable: true },
            overlayElements: {value: [] as BaseElement[], writable: true, enumerable: true },
        }) as BaseElement & ProtoBaseElement
    
    
    protoBaseElement.createPath(geometry);

    return prototypedBaseElement;
}

// !@# ideja - za kreiranje geometrije koristiti tuples i onda moze kao argument tuple1 | tuple2