import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";

// single instance of socket
export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: true, // or false if you want to connect manually
});
