import { create } from "zustand";

export type PlayerColor = "white" | "black";

type GameStatus = "idle" | "queued" | "playing";

type ChessState = {
  status: GameStatus;
  matchId: string | null;
  color: PlayerColor | null;

  fen: string; // server-authoritative
  turn: PlayerColor; // whose turn per server
  historySan: string[];

  setQueued: () => void;
  setMatch: (payload: { matchId: string; color: PlayerColor }) => void;
  setGameState: (payload: { fen: string; turn: PlayerColor; historySan: string[] }) => void;
  reset: () => void;
};

export const useChessStore = create<ChessState>((set) => ({
  status: "idle",
  matchId: null,
  color: null,

  fen: "start",
  turn: "white",
  historySan: [],

  setQueued: () => set({ status: "queued" }),
  setMatch: ({ matchId, color }) => set({ status: "playing", matchId, color }),
  setGameState: ({ fen, turn, historySan }) => set({ fen, turn, historySan }),
  reset: () =>
    set({
      status: "idle",
      matchId: null,
      color: null,
      fen: "start",
      turn: "white",
      historySan: [],
    }),
}));