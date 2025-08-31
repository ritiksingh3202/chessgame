// core piece definitions and movement helpers
import type { Board } from "./board";
import type { Move } from "./move";

export enum PieceType {
  Pawn = "Pawn",
  Rook = "Rook",
  Bishop = "Bishop",
  Knight = "Knight",
  Queen = "Queen",
  King = "King",
}

export enum PieceColor {
  White = "White",
  Black = "Black",
}

export interface Piece {
  type: PieceType;
  color: PieceColor;
}

import { isValidPawnMove } from "./validate/pawn";
import { isValidRookMove } from "./validate/rook";
import { isValidBishopMove } from "./validate/bishop";
import { isValidKnightMove } from "./validate/knight";
import { isValidQueenMove } from "./validate/queen";
import { isValidKingMove } from "./validate/king";

export function isValidPieceMove(board: Board, move: Move): boolean {

  const piece = board[move.from.row][move.from.col];
  if (!piece) return false;

  switch (piece.type) {

    case PieceType.Pawn:
      return isValidPawnMove(board, move);

    case PieceType.Rook:
      return isValidRookMove(board, move);

    case PieceType.Bishop:
      return isValidBishopMove(board, move);

    case PieceType.Knight:
      return isValidKnightMove(board, move);

    case PieceType.Queen:
      return isValidQueenMove(board, move);

    case PieceType.King:
      return isValidKingMove(board, move);

    default:
      return false;
  }
}