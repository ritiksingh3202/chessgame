import { PieceType, PieceColor } from "./piece";

export type Board = (Piece | null)[][];

export const BOARD_SIZE = 8;

export function createEmptyBoard(): Board {
  const board: Board = [];

  for (let r = 0; r < BOARD_SIZE; r++) {
    const row: (Piece | null)[] = [];

    for (let c = 0; c < BOARD_SIZE; c++) {
      row.push(null);
    }

    board.push(row);
  }

  return board;
}

export function createInitialBoard(): Board {
  const board = createEmptyBoard();

  const backRank = [
    PieceType.Rook,
    PieceType.Knight,
    PieceType.Bishop,
    PieceType.Queen,
    PieceType.King,
    PieceType.Bishop,
    PieceType.Knight,
    PieceType.Rook,
  ];

  // Black pieces
  for (let c = 0; c < BOARD_SIZE; c++) {
    board[0][c] = { type: backRank[c], color: PieceColor.Black };
    board[1][c] = { type: PieceType.Pawn, color: PieceColor.Black };
  }

  // White pieces
  for (let c = 0; c < BOARD_SIZE; c++) {
    board[6][c] = { type: PieceType.Pawn, color: PieceColor.White };
    board[7][c] = { type: backRank[c], color: PieceColor.White };
  }

  return board;
}

export interface Piece {
  type: PieceType; // Link to PieceType enum
  color: PieceColor;
}


export function cloneBoard(board: Board): Board {
  return board.map((row) =>
    row.map((piece) => (piece ? { ...piece } : null))
  );
}


export function getPiece(board: Board, row: number, col: number): Piece | null {
  return board[row][col];
}


export function setPiece(
  board: Board,
  row: number,
  col: number,
  piece: Piece | null
) {
  board[row][col] = piece;
}