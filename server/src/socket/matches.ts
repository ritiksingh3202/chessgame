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
