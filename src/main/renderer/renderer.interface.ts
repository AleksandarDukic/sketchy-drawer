import type { Scene } from "../scene/scene";

export interface Renderer {
  render: (scene: Scene) => void;
}