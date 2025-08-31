import { Board } from "../board";
import { Move } from "../move";

export function isValidKnightMove(board: Board, move: Move): boolean {
  // Placeholder: Implement knight movement (L-shape).
  const deltaRow = Math.abs(move.to.row - move.from.row);
  const deltaCol = Math.abs(move.to.col - move.from.col);
  if ((deltaRow === 2 && deltaCol === 1) || (deltaRow === 1 && deltaCol === 2)) {
    return board[move.to.row][move.to.col] === null || (board[move.to.row][move.to.col]?.color !== board[move.from.row][move.from.col]?.color);
  }
  return false;
}