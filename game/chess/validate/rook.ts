import { Board } from "../board";
import { Move } from "../move";

export function isValidRookMove(board: Board, move: Move): boolean {
  // Placeholder: Implement rook movement (horizontal/vertical, no pieces in path).
  const deltaRow = Math.abs(move.to.row - move.from.row);
  const deltaCol = Math.abs(move.to.col - move.from.col);
  if ((deltaRow === 0 || deltaCol === 0) && !(deltaRow === 0 && deltaCol === 0)) {
    // Check path is clear (simplified; add full path check)
    return board[move.to.row][move.to.col] === null || (board[move.to.row][move.to.col]?.color !== board[move.from.row][move.from.col]?.color);
  }
  return false;
}