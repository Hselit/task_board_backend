import { Server } from "socket.io";

export const registerSocketHandlers = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);
    io.emit("connected-users", io.engine.clientsCount);

    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${socket.id}`);

      io.emit("connected-users", io.engine.clientsCount);
    });
  });
};