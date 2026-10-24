import type { Scene } from "../../scene/scene/scene.interface";

export interface Renderer {
    render: (scene: Scene) => void;
}