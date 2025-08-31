// promotion of pawn rules here
import { Board } from "../board";
import { Move } from "../move";
import { PieceType, PieceColor } from "../piece";

export function isPromotion(
  board: Board,
  move: Move
): boolean {

  const piece = board[move.from.row][move.from.col];

  if (!piece || piece.type !== PieceType.Pawn) {
    return false;
  }

  if (
    piece.color === PieceColor.White &&
    move.to.row === 0
  ) {
    return true;
  }

  if (
    piece.color === PieceColor.Black &&
    move.to.row === 7
  ) {
    return true;
  }

  return false;
}