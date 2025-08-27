import { Chess } from "chess.js";
import crypto from "crypto";
import type { PlayerColor } from "./types";

export type MatchState = {
  id: string;
  chess: Chess;
  players: Partial<Record<PlayerColor, string>>; // socket.id per color
  historySan: string[];
};

const matches = new Map<string, MatchState>();
let waitingSocketId: string | null = null;
const socketToMatch = new Map<string, { matchId: string; color: PlayerColor }>();

export function getMatch(matchId: string) {
  return matches.get(matchId);
}

export function getWaitingSocketId() {
  return waitingSocketId;
}

export function setWaitingSocketId(socketId: string | null) {
  waitingSocketId = socketId;
}

export function createMatch(whiteSocketId: string, blackSocketId: string): MatchState {
  const id = crypto.randomUUID();
  const chess = new Chess();

  const match: MatchState = {
    id,
    chess,
    players: { white: whiteSocketId, black: blackSocketId },
    historySan: [],
  };

  matches.set(id, match);
  socketToMatch.set(whiteSocketId, { matchId: id, color: "white" });
  socketToMatch.set(blackSocketId, { matchId: id, color: "black" });
  return match;
}

export function deleteMatch(matchId: string) {
  matches.delete(matchId);
}

export function getSocketMatch(socketId: string) {
  return socketToMatch.get(socketId);
}

export function clearSocketMatch(socketId: string) {
  socketToMatch.delete(socketId);
}

