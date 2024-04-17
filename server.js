const app = require(`${__dirname}/app.js`);
const http = require(`http`);
const { Server } = require("socket.io");
const dotenv = require("dotenv");

const server = http.createServer(app);
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("A new user connected", socket.id);
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});
dotenv.config({ path: `${__dirname}/config.env` });

server.listen(process.env.PORT, () => {
  console.log(`Server is listening to port ${process.env.PORT}`);
});
