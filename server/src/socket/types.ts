export type PlayerColor = "white" | "black";

export type ClientToServerEvents = {
  matchmaking:join: () => void;
  match:join: (payload: { matchId: string }) => void;
  game:move: (payload: { matchId: string; from: string; to: string; promotion?: string }) => void;
};
