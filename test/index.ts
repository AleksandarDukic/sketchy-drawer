import * as sd from "../dist/index.mjs"


const canvas = document.getElementById("canvas") as HTMLCanvasElement;
if (!canvas) throw new Error();
const ctx = canvas.getContext("2d");


const render = sd.createRenderer(canvas);

const scene = new sd.Scene();


{
    const point = new sd.PointGeometry();
    const material = new sd.Material("red", sd.MaterialStyle.Fill);
    const element = new sd.BaseElement(point, material);
    element.setPosition([150, 40]);
    scene.addElement(element);

}

{

    const line = new sd.LineGeometry(500);
    const material = new sd.Material("blue", sd.MaterialStyle.Fill);
    const element = new sd.BaseElement(line, material, { x: 10, y: 40 }, Math.PI / 100);
    scene.addElement(element);
}


render.render(scene);
