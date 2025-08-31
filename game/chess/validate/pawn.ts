import { Board } from "../board";
import { Move } from "../move";

export function isValidPawnMove(board: Board, move: Move): boolean {
  // Placeholder: Implement pawn-specific movement rules (e.g., forward 1-2 squares, diagonal capture).
  // For now, return true if basic conditions are met (e.g., not moving backward).
  const piece = board[move.from.row][move.from.col];
  if (!piece) return false;
  const direction = piece.color === 'white' ? -1 : 1; // White moves up (row decreases)
  const deltaRow = move.to.row - move.from.row;
  const deltaCol = Math.abs(move.to.col - move.from.col);
  // Basic check: Move forward 1 square, or 2 if starting position
  if (deltaCol === 0 && deltaRow === direction && board[move.to.row][move.to.col] === null) return true;
  if (deltaCol === 0 && deltaRow === 2 * direction && move.from.row === (piece.color === 'white' ? 6 : 1) && board[move.to.row][move.to.col] === null) return true;
  // Diagonal capture
  if (deltaCol === 1 && deltaRow === direction && board[move.to.row][move.to.col] !== null) return true;
  return false;
}