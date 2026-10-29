import type { Scene } from "../../scene/scene/scene.interface"
import type { Renderer } from "./renderer.interface"

export function createRenderer(canvas: HTMLCanvasElement) {

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("No canvas context found");
    console.log("renderer")
    const renderer: Renderer = {
        render: (scene: Scene) => {
            scene.getElements().forEach(element => element.draw(ctx));
        }

    }

    return renderer;
}
/* 

svaki element ima nizove dece elemente:

    underlay: elementi koji se renderaju pre
    overlay: elementi koji se renderaju posle
    path: ono sto se rendera u sredini
    material: stroke | fill



sketchy-elemnt ima  underlay:   SketchyElement[]
                    overlay:    SketchyElement[]

za util za liniju:
    - model LineCoordinates = {A: Postion, B: Position}
    - getOrthogonalLine(start, end, % length of orthogonal line from original line: 0..100): LineCoordinates

*/
