import * as sd from "../dist/index.mjs";
const canvas = document.getElementById("canvas");
if (!canvas)
    throw new Error();
const render = sd.createRenderer(canvas);
const scene = sd.createScene();
// SD.
const lineStart = { x: 10, y: 10 };
const lineEnd = { x: 90, y: 90 };
const line = sd.createLine(lineStart, lineEnd);
const sketchyLine1 = sd.createSketchyLine({ x: 110, y: 10 }, { x: 190, y: 90 });
const sketchyLine2 = sd.createSketchyLine({ x: 290, y: 10 }, { x: 210, y: 90 });
const sketchyLine3 = sd.createSketchyLine({ x: 190, y: 190 }, { x: 110, y: 110 });
const sketchyLine4 = sd.createSketchyLine({ x: 210, y: 190 }, { x: 290, y: 110 });
scene.add(line);
scene.add(sketchyLine1);
scene.add(sketchyLine2);
scene.add(sketchyLine3);
scene.add(sketchyLine4);
render.render(scene);
//# sourceMappingURL=index.js.map