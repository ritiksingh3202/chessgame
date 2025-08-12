//Handle game state and moves updates
interface Game {
  id: string
  players: string[]
}

const games: Record<string, Game> = {}

export function createGame(p1: string, p2: string) {

  const id = crypto.randomUUID()

  games[id] = {
    id,
    players: [p1, p2]
  }

  return games[id]
}
