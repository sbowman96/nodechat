var socket = io();
socket.on('connect',function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: "Bill",
    body: 'Hi there'
  })
});

socket.on('disconnect', function () {
  console.log('User disconnected');
});
socket.on('newMessage', function (message) {
console.log('New Message', message);
});
