// game status and main chess page
"use client";

import { useEffect, useState } from "react";
import ChessCanvas from "./ChessCanvas";
import ChessUI from "./ChessUI";

type GameStatus = "MATCHING" | "PLAYING";

export default function ChessPage() {
    const [status, setStatus] = useState<GameStatus>("MATCHING");

    useEffect(() => {
        setTimeout(() => {
            setStatus("PLAYING");
        }, 2000);
    }, []);

    return (
        <div className="relative h-[80vh] flex items-center justify-center">
            {status === "MATCHING" && <ChessUI />}
            {status === "PLAYING" && <ChessCanvas />}
        </div>
    );
}