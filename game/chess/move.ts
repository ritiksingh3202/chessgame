import { PieceType } from "./piece";

export interface Square {
  row: number;
  col: number;
}

export interface Move {
  from: Square;
  to: Square;

  promotion?: PieceType;

  isCapture?: boolean;
  isCastling?: boolean;
  isEnPassant?: boolean;
}