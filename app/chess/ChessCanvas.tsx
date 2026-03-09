//Board is created here
"use client";

import { useEffect, useRef } from "react";
import { drawBoard } from "@/canvas/chess/draw/board";
import { CANVAS_SIZE } from "@/canvas/chess/config";

export default function ChessCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        drawBoard(ctx);
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