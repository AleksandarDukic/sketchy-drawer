import * as sd from "../dist/index.mjs"


const canvas = document.getElementById("canvas") as HTMLCanvasElement;
if (!canvas) throw new Error();

const render = sd.createRenderer(canvas);

const scene = sd.createScene();
// const gfc = sd.geometryFactory;
// const mfc = sd.materialFactory;

// let gLine = gfc.createLineDec({x: 10, y: 50},{x: 20, y: 100});
// let mLine = mfc.createMaterial();
//console.log(gLine, mLine)
//
// const lineStart: sd.Position = {x: 10, y:10};
// const lineEnd: sd.Position = {x: 90, y: 90};
// const line = sd.createLine(lineStart, lineEnd);

// const sketchyLine1 = sd.createSketchyLine({x: 110, y: 10}, {x: 190, y: 90})
// const sketchyLine2 = sd.createSketchyLine({x: 290, y: 10}, {x: 210, y: 90})
// const sketchyLine3 = sd.createSketchyLine({x: 190, y: 190}, {x: 110, y: 110})
// const sketchyLine4 = sd.createSketchyLine({x: 210, y: 190}, {x: 290, y: 110})

// scene.add(line);
// scene.add(sketchyLine1);
// scene.add(sketchyLine2);
// scene.add(sketchyLine3);
// scene.add(sketchyLine4);
//
render.render(scene);


// test

// Point
// type PointProps = [number, number]

// interface PointGeometry {
//     x: number,
//     y: number
// }

// // Point Prototype

// interface PointPrototype {
//     add(this: PointGeometry, b: PointGeometry): void;
// }
// const PointPrototype: PointPrototype = {
//     add(this: PointGeometry, b: PointGeometry) {
//         this.x += b.x;
//         this.y += b.x;
//     }
// }


// interface PointConstructor {
//     new (props: PointProps): PointGeometry & PointPrototype
// }
// const Point:PointConstructor = function(props: PointProps): PointGeometry & PointPrototype {
//         console.log("!!");
//         const o: PointGeometry = {x: props[0], y: props[1]};
//         return Object.create(PointPrototype, {
//             x: { value: props[0], writable: true, enumerable: true},
//             y: { value: props[1], writable: true, enumerable: true}
//         }) as PointGeometry & PointPrototype

//     } as any


// const a = new Point([1,2]);
// const b = new Point([3,4]);
// let c = new Date
// a.add(b);
// b.add(b);


////////////////////////////////////

//
const a = new sd.BaseGeometry();

a.update()
a.generatePath()
console.log(a.attributes)

const b = new sd.PointGeometry([1, 2]);

// b.update()
// b.generate()
console.log(b)
b.update()
b.getPath()



