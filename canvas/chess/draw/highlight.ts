import { TILE_SIZE } from "../config";

export function highlightSquare(
  ctx: CanvasRenderingContext2D,
  square: { row: number; col: number }
) {

  ctx.fillStyle = "rgba(255,255,0,0.3)";

  ctx.fillRect(
    square.col * TILE_SIZE,
    square.row * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE
  );
}

export function highlightMoves(
  ctx: CanvasRenderingContext2D,
  moves: { row: number; col: number }[]
) {

  ctx.fillStyle = "rgba(0,255,0,0.4)";

  for (const move of moves) {

    ctx.beginPath();

    ctx.arc(
      move.col * TILE_SIZE + TILE_SIZE / 2,
      move.row * TILE_SIZE + TILE_SIZE / 2,
      TILE_SIZE * 0.2,
      0,
      Math.PI * 2
    );

    ctx.fill();
  }
}