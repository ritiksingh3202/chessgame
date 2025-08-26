export type PlayerColor = "white" | "black";

export type ClientToServerEvents = {
  matchmaking:join: () => void;
  match:join: (payload: { matchId: string }) => void;
  game:move: (payload: { matchId: string; from: string; to: string; promotion?: string }) => void;
};

export type ServerToClientEvents = {
  matchmaking:status: (payload: { status: "queued" }) => void;
  match:started: (payload: { matchId: string; color: PlayerColor }) => void;
  game:state: (payload: { matchId: string; fen: string; turn: PlayerColor; historySan: string[]; status: "active" | "checkmate" | "draw" }) => void;
  error: (payload: { message: string }) => void;
};

