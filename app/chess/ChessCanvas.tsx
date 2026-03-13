"use client";

import { useEffect, useRef } from "react";
import { drawBoard } from "@/canvas/chess/draw/board";
import { drawPieces } from "@/canvas/chess/draw/pieces";
import { highlightSquare, highlightMoves } from "@/canvas/chess/draw/highlight";
import { CANVAS_SIZE } from "@/canvas/chess/config";

import { generateMoves } from "@/game/chess/generateMoves";
import { createInitialBoard, Board } from "@/game/chess/board";
import { Move } from "@/game/chess/move";
import { isValidPieceMove } from "@/game/chess/piece";

export default function ChessCanvas() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  let board: Board = createInitialBoard();

  let selected: { row: number; col: number } | null = null;
  let legalMoves: { row: number; col: number }[] = [];

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    render();

    canvas.addEventListener("click", handleClick);

    function render() {

      drawBoard(ctx);

      if (selected) {
        highlightSquare(ctx, selected);
        highlightMoves(ctx, legalMoves);
      }

      drawPieces(ctx, board);
    }

    function handleClick(event: MouseEvent) {

      const rect = canvas.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const col = Math.floor(x / 80);
      const row = Math.floor(y / 80);

      if (!selected) {

        const piece = board[row][col];

        if (!piece) return;

        selected = { row, col };

        legalMoves = generateMoves(board,row, col);

        render();
        return;
      }

      const move: Move = {
        from: selected,
        to: { row, col }
      };

      if (isValidPieceMove(board, move)) {

        const piece = board[selected.row][selected.col];

        board[selected.row][selected.col] = null;
        board[row][col] = piece;

      }

      selected = null;
      legalMoves = [];

      render();
    }

  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      className="border"
    />
  );

}