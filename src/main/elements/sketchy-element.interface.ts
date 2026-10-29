export interface SketchyElement {
    // !@# ne treba da ima funkciju draw,
    // to treba da radi renderer
    draw: (ctx: CanvasRenderingContext2D) => void;
}