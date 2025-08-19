//service layer to persist moves to DB when moves are made
import prisma from "@/server/src/db/prisma";

export async function saveMove(move:any) {

  return prisma.move.create({
    data:{
      matchId: move.matchId,
      moveNum: move.moveNum,
      from: move.from,
      to: move.to,
      piece: move.piece
    }
  });

}