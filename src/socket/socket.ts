import { Server } from "socket.io";

export const registerSocketHandlers = (io: Server) => {
  io.on("connection", (socket) => {
   console.log("Connected:", socket.id);
console.log("Clients:", io.engine.clientsCount);

io.emit("active-users", io.engine.clientsCount);

socket.on("disconnect", () => {
console.log("Disconnected:", socket.id);
console.log("Clients:", io.engine.clientsCount);
      io.emit("active-users", io.engine.clientsCount);
    });
  });
};