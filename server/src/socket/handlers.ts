import type { Server, Socket } from "socket.io";
import type { ClientToServerEvents, ServerToClientEvents, PlayerColor } from "./types";
import { clearSocketMatch, createMatch, getMatch, getSocketMatch, getWaitingSocketId, setWaitingSocketId } from "./matches";

function getTurnColor(fen: string): PlayerColor {
  // FEN: ".... w ...." or ".... b ...."
  const parts = fen.split(" ");
  return parts[1] === "b" ? "black" : "white";
}

function getStatus(match: ReturnType<typeof getMatch>) {
  if (!match) return "active" as const;
  const chess = match.chess;
  if (chess.isCheckmate()) return "checkmate" as const;
  if (chess.isDraw()) return "draw" as const;
  return "active" as const;
}
