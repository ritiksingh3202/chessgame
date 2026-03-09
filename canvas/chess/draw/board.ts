// chess board drawing logic here
import { BOARD_SIZE, TILE_SIZE, COLORS } from "../config";

export function drawBoard(ctx: CanvasRenderingContext2D) {
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const isLight = (row + col) % 2 === 0;
      ctx.fillStyle = isLight ? COLORS.light : COLORS.dark;

      ctx.fillRect(
        col * TILE_SIZE,
        row * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE
      );
    }
  }
}