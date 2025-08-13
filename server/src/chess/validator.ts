import { isValidPieceMove } from "@/game/chess/piece";

export function validateMove(board:any, move:any) {

  return isValidPieceMove(board, move);

}