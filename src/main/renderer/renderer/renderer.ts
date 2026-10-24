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