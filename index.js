import http from "http";

import { WebSocketServer } from "ws";
import url from "url";
const server = http.createServer();
import { v4 as uuidv4 } from 'uuid';
const wsServer = new WebSocketServer({ server });

const port = 8000;


const connections = {};


wsServer.on("connection", (connection, request) => {
  // localhost:8000?username=Alex

  const { username } = url.parse(request.url, true).query;
  console.log("🚀 ~ username:", username)
  const uuid = uuidv4();
  console.log("🚀 ~ uuid:", uuid)
  
});

server.listen(port, () => {
  console.log(`Websocket server is running on port ${port}`);
});
