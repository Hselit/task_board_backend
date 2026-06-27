import http from 'http';
import {env} from "./config/config"
import {Server} from 'socket.io';

import app from "./src/app";
import { prisma } from './src/utils/prisma';
import { registerSocketHandlers } from "./src/utils/socket";


const server = http.createServer(app);
const PORT = env.PORT;

export const io = new Server(
  server,
  {
    cors: {
      origin: "*"
    },
  }
);

registerSocketHandlers(io);

const startServer = async () => {
  try {
    await prisma.$connect();
     console.info("Connected to PostgreSQL");
  
    server.listen(PORT, () => {
      console.info(`Server running at port ${PORT}`);
    })
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();