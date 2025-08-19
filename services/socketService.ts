import { saveMove } from "./gameService";

export async function handleMove(io:any, socket:any, move:any) {

  await saveMove(move);

  io.to(move.matchId).emit("move", move);

}