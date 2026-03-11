// animation part here
import { TILE_SIZE } from "../config";
import { PieceColor, PieceType } from "@/game/chess/piece";

interface Piece {
    type: PieceType;
    color: PieceColor;
}

interface Square {
    row: number;
    col: number;
}

const symbols = {
    white: {
        king: "♔",
        queen: "♕",
        rook: "♖",
        bishop: "♗",
        knight: "♘",
        pawn: "♙",
    },
    black: {
        king: "♚",
        queen: "♛",
        rook: "♜",
        bishop: "♝",
        knight: "♞",
        pawn: "♟",
    }
};

/**
 * Animate piece movement
 */
export function animateMove(
    ctx: CanvasRenderingContext2D,
    piece: Piece,
    from: Square,
    to: Square,
    duration: number = 200
) {

    const startX = from.col * TILE_SIZE;
    const startY = from.row * TILE_SIZE;

    const endX = to.col * TILE_SIZE;
    const endY = to.row * TILE_SIZE;

    const symbol =
        PieceColor(piece.color) === PieceColor.White
            ? symbols.white[piece.type]
            : symbols.black[piece.type];

    let startTime: number | null = null;

    function frame(time: number) {

        if (!startTime) startTime = time;

        const progress = Math.min(
            (time - startTime) / duration,
            1
        );

        const x = startX + (endX - startX) * progress;
        const y = startY + (endY - startY) * progress;

        ctx.font = `${TILE_SIZE * 0.8}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle =
            PieceColor(piece.color) === PieceColor.White
                ? "#ffffff"
                : "#000000";

        ctx.fillText(
            symbol,
            x + TILE_SIZE / 2,
            y + TILE_SIZE / 2
        );

        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}