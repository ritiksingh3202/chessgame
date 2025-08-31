// rules related to castling here
import { Board } from "../board";
import { Move } from "../move";
import { PieceType } from "../piece";

export function canCastle(board: Board, move: Move): boolean {
  const piece = board[move.from.row][move.from.col];

  if (!piece || piece.type !== PieceType.King) return false;

  const row = move.from.row;
  const isKingSide = move.to.col === 6;
  const isQueenSide = move.to.col === 2;

  if (!isKingSide && !isQueenSide) return false;

  if (isKingSide) {
    if (board[row][5] !== null) return false;
    if (board[row][6] !== null) return false;
  }

  if (isQueenSide) {
    if (board[row][1] !== null) return false;
    if (board[row][2] !== null) return false;
    if (board[row][3] !== null) return false;
  }

  return true;
}