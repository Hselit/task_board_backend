import { Server } from "socket.io";

export const registerSocketHandlers = (io: Server) => {
  io.on("connection", (socket) => {
    io.emit("active-users", io.engine.clientsCount);

    socket.on("disconnect", () => {
      io.emit("active-users", io.engine.clientsCount);
    });
  });
};