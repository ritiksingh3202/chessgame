import { Board } from "../board";
import { Move } from "../move";

export function isValidBishopMove(board: Board, move: Move): boolean {
  // Placeholder: Implement bishop movement (diagonal, no pieces in path).
  const deltaRow = Math.abs(move.to.row - move.from.row);
  const deltaCol = Math.abs(move.to.col - move.from.col);
  if (deltaRow === deltaCol && deltaRow > 0) {
    // Check path is clear (simplified; add full diagonal check)
    return board[move.to.row][move.to.col] === null || (board[move.to.row][move.to.col]?.color !== board[move.from.row][move.from.col]?.color);
  }
  return false;
}