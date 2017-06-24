const path = require('path');
const http = require ('http');
const express = require('express');
const socketIO  = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8081;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('new connection');

  socket.emit('newMessage', {
  from: 'Earl',
  text: 'YESSS'
});

socket.on('createMessage', (message) => {
console.log('createMessage', message);
});

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
