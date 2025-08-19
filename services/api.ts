import prisma from "@/server/src/db/prisma";

export async function getMatchHistory(matchId:string){

  return prisma.move.findMany({
    where:{matchId},
    orderBy:{moveNum:"asc"}
  });

}