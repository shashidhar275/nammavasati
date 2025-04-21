import { io } from "socket.io-client";

const socket = io("https://nammavasati-backend.onrender.com", {
  autoConnect: false, // Prevents auto connection
  transports: ["websocket"], // Ensures WebSocket-only connection
});

export default socket;
