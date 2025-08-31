import { Board } from "./board";
import { Move } from "./move";
import { isValidPieceMove } from "./piece";

export function generateMoves(
  board: Board,
  row: number,
  col: number
) {

  const moves: { row: number; col: number }[] = [];

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {

      const move: Move = {
        from: { row, col },
        to: { row: r, col: c }
      };

      if (isValidPieceMove(board, move)) {
        moves.push({ row: r, col: c });
      }

    }
  }

  return moves;
}