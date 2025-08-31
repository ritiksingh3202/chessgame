//rules related to checkmate 
import { Board } from "../board";
import { PieceColor } from "../piece";
import { isKingInCheck } from "./check";

export function isCheckmate(
  board: Board,
  color: PieceColor
): boolean {

  if (!isKingInCheck(board, color)) {
    return false;
  }

  // Later this should generate all legal moves
  // and see if any move removes the check.

  return false;
}