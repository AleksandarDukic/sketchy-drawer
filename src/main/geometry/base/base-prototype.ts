import type { IBaseGeometry } from "./base-interface";
import type { IBaseGeometryPrototype } from "./base-prototype.interface";




type PrototypeDescriptorMap<T> = {
    [K in keyof T]: TypedPropertyDescriptor<T[K]>;
};

const descriptors: PrototypeDescriptorMap<IBaseGeometryPrototype> = {
    update: {
        value: function (this: IBaseGeometry): void {
            console.log("Base Geometry Prototype: updating", this.attributes);
        }
    },

    generatePath: {
        value: function (): void {
            console.log("BaseGeometryPrototype: generate");
        }
    },
    getAttributes: { value: function (this: IBaseGeometry): IBaseGeometry { return this } },
    getPath: { value: function (this: IBaseGeometry): Path2D { return new Path2D } }
};


// export const BaseGeometryPrototype: IBaseGeometryPrototype = Object.create({}, {

//     update: {
//         value: function (this: IBaseGeometry): void { console.log("Base Geomerty Prototype: updating", this.attributes) }
//     },
//     generatePatsh: {
//         value: function (): void { console.log("BaseGeomertyPrototype: generate") }
//     }

// })

export const BaseGeometryPrototype: IBaseGeometryPrototype = Object.create({}, descriptors)