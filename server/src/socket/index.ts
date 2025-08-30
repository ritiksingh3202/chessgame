import { Server } from "socket.io";
import http from "http";
import { registerHandlers } from "./handlers";

export function startSocketServer() {

  const server = http.createServer();

  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {

    registerHandlers(io, socket);

  });

  server.listen(4000, () => {
    console.log("Socket server running");
  });

}