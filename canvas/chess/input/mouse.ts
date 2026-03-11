// allows users to interact using mouse
import { Board } from "@/game/chess/board";
import { Move } from "@/game/chess/move";
import { TILE_SIZE } from "../config";

export interface Square {
  row: number;
  col: number;
}

export function getSquareFromMouse(
  event: MouseEvent,
  canvas: HTMLCanvasElement
): Square {

  const rect = canvas.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  return {
    row: Math.floor(y / TILE_SIZE),
    col: Math.floor(x / TILE_SIZE)
  };
}

export function setupMouseInput(
  canvas: HTMLCanvasElement,
  board: Board,
  onMove: (move: Move) => void
) {

  let selected: Square | null = null;

  canvas.addEventListener("click", (event) => {

    const square = getSquareFromMouse(event, canvas);

    if (!selected) {
      selected = square;
      return;
    }

    const move: Move = {
      from: selected,
      to: square
    };

    onMove(move);

    selected = null;
  });
}