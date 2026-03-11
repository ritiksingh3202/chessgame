//entry point for chess canvas
import { createInitialBoard, Board } from "@/game/chess/board";
import { Move } from "@/game/chess/move";
import { isValidPieceMove } from "@/game/chess/piece";

import { drawBoard } from "./draw/board";
import { drawPieces } from "./draw/pieces";

import { setupMouseInput } from "./input/mouse";

let board: Board;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;


export function initChessCanvas(canvasElement: HTMLCanvasElement) {

  canvas = canvasElement;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas context not available");
  }

  ctx = context;

  board = createInitialBoard();

  setupMouseInput(canvas, board, handleMove);

  render();
}


function handleMove(move: Move) {

  const valid = isValidPieceMove(board, move);

  if (!valid) return;

  applyMove(move);

  render();
}


function applyMove(move: Move) {

  const piece = board[move.from.row][move.from.col];

  board[move.from.row][move.from.col] = null;

  board[move.to.row][move.to.col] = piece;
}


function render() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBoard(ctx);

  drawPieces(ctx, board);
}