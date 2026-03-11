// suggets possible moves when a piece is selected
import { TILE_SIZE } from "../config";

export function setupTouchInput(canvas: HTMLCanvasElement) {

  canvas.addEventListener("touchstart", (event) => {

    const touch = event.touches[0];

    const rect = canvas.getBoundingClientRect();

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const col = Math.floor(x / TILE_SIZE);
    const row = Math.floor(y / TILE_SIZE);

    console.log("Touch at", row, col);
  });
}