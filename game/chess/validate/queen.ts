import { Board } from "../board";
import { Move } from "../move";
import { isValidRookMove } from "./rook";
import { isValidBishopMove } from "./bishop";

export function isValidQueenMove(board: Board, move: Move): boolean {
  // Placeholder: Queen combines rook and bishop moves.
  return isValidRookMove(board, move) || isValidBishopMove(board, move);
}