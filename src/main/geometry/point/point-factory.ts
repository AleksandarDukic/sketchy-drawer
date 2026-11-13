import type { IPointGeometry } from "./point-interface";
import type { PointProps } from "./point-props";
import { PointGeometryPrototype } from "./point-prototype";
import type { IPointGeometryPrototype } from "./point-prototype.interface";



interface PointGeometryConstructor {
    new (props: PointProps): IPointGeometry & IPointGeometryPrototype
}

export const PointGeometry: PointGeometryConstructor = 
    function(props: PointProps) {
        const p = Object.create(null, {
            x: { value: props[0]},
            y: { value: props[1]}
        })

        return Object.create(PointGeometryPrototype, {
            attributes: {value: p}
        }) as IPointGeometry & IPointGeometryPrototype
    } as unknown as PointGeometryConstructor
