// Pieces drawing logic here

import { Board } from "@/game/chess/board";
import { PieceType, PieceColor } from "@/game/chess/piece";
import { TILE_SIZE } from "../config";

/**
 * Unicode chess symbols
 */
const symbols = {
  white: {
    [PieceType.King]: "♔",
    [PieceType.Queen]: "♕",
    [PieceType.Rook]: "♖",
    [PieceType.Bishop]: "♗",
    [PieceType.Knight]: "♘",
    [PieceType.Pawn]: "♙",
  },

  black: {
    [PieceType.King]: "♚",
    [PieceType.Queen]: "♛",
    [PieceType.Rook]: "♜",
    [PieceType.Bishop]: "♝",
    [PieceType.Knight]: "♞",
    [PieceType.Pawn]: "♟",
  }
};


export function drawPieces(
  ctx: CanvasRenderingContext2D,
  board: Board
) {

  ctx.font = `${TILE_SIZE * 0.8}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

      const piece = board[row][col];

      if (!piece) continue;

      const symbol =
        piece.color === PieceColor.White
          ? symbols.white[piece.type]
          : symbols.black[piece.type];

      ctx.fillStyle =
        piece.color === PieceColor.White
          ? "#ffffff"
          : "#000000";

      ctx.fillText(
        symbol,
        col * TILE_SIZE + TILE_SIZE / 2,
        row * TILE_SIZE + TILE_SIZE / 2
      );
    }

  }
}