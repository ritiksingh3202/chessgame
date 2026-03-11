// enables dragging of pieces on the chessboard
import { TILE_SIZE } from "../config";

export function setupDragInput(canvas: HTMLCanvasElement) {

  let dragging = false;

  canvas.addEventListener("mousedown", () => {
    dragging = true;
  });

  canvas.addEventListener("mouseup", () => {
    dragging = false;
  });

  canvas.addEventListener("mousemove", (event) => {

    if (!dragging) return;

    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const col = Math.floor(x / TILE_SIZE);
    const row = Math.floor(y / TILE_SIZE);

    console.log("Dragging over", row, col);
  });
}