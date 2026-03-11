// rules related to check here
import { Board } from "../board";
import { PieceColor, PieceType } from "../piece";

export function findKing(board: Board, color: PieceColor) {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];

      if (
        piece &&
        piece.type === PieceType.King &&
        piece.color === color
      ) {
        return { row: r, col: c };
      }
    }
  }

  return null;
}

export function isKingInCheck(
  board: Board,
  color: PieceColor
): boolean {
  const kingPos = findKing(board, color);

  if (!kingPos) return false;

  const opponent =
    color === PieceColor.White
      ? PieceColor.Black
      : PieceColor.White;

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];

      if (piece && piece.color === opponent) {
        if (r === kingPos.row && c === kingPos.col) {
          return true;
        }
      }
    }
  }

  return false;
}