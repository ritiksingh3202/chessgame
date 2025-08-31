// en passant rule here
import { Board } from "../board";
import { Move } from "../move";
import { PieceType } from "../piece";

export function isEnPassant(
  board: Board,
  move: Move,
  lastMove: Move | null
): boolean {

  if (!lastMove) return false;

  const piece = board[move.from.row][move.from.col];

  if (!piece || piece.type !== PieceType.Pawn) {
    return false;
  }

  const movedTwoSquares =
    Math.abs(lastMove.from.row - lastMove.to.row) === 2;

  if (!movedTwoSquares) return false;

  const sameColumn = move.to.col === lastMove.to.col;

  if (!sameColumn) return false;

  return true;
}