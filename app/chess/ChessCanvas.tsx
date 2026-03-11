"use client";

import { useEffect, useRef } from "react";
import { drawBoard } from "@/canvas/chess/draw/board";
import { drawPieces } from "@/canvas/chess/draw/pieces";
import { CANVAS_SIZE } from "@/canvas/chess/config";
import { createInitialBoard } from "@/game/chess/board";

export default function ChessCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const board = createInitialBoard(); // create board with pieces

    drawBoard(ctx);
    drawPieces(ctx, board); // PASS board here

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