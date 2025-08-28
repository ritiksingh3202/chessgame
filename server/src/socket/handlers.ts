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

export function registerHandlers(
  io: Server<ClientToServerEvents, ServerToClientEvents>,
  socket: Socket<ClientToServerEvents, ServerToClientEvents>
) {
  socket.on("matchmaking:join", () => {
    const waiting = getWaitingSocketId();

    if (!waiting || waiting === socket.id) {
      setWaitingSocketId(socket.id);
      socket.emit("matchmaking:status", { status: "queued" });
      return;
    }

    // pair waiting + current
    const match = createMatch(waiting, socket.id);
    setWaitingSocketId(null);

    const whiteSocket = io.sockets.sockets.get(waiting);
    const blackSocket = socket;

    whiteSocket?.join(match.id);
    blackSocket.join(match.id);

    whiteSocket?.emit("match:started", { matchId: match.id, color: "white" });
    blackSocket.emit("match:started", { matchId: match.id, color: "black" });

    const fen = match.chess.fen();
    io.to(match.id).emit("game:state", {
      matchId: match.id,
      fen,
      turn: getTurnColor(fen),
      historySan: match.historySan,
      status: getStatus(match),
    });
  });
}
