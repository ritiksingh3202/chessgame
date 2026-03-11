import { Board } from "../board";
import { Move } from "../move";

export function isValidKingMove(board: Board, move: Move): boolean {
  // Placeholder: Implement king movement (one square in any direction).
  const deltaRow = Math.abs(move.to.row - move.from.row);
  const deltaCol = Math.abs(move.to.col - move.from.col);
  if (deltaRow <= 1 && deltaCol <= 1 && !(deltaRow === 0 && deltaCol === 0)) {
    return board[move.to.row][move.to.col] === null || (board[move.to.row][move.to.col]?.color !== board[move.from.row][move.from.col]?.color);
  }
  return false;
}