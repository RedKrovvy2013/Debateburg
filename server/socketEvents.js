exports = module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.join('debatehall1');
    socket.on('leave channel', function(channel) {
      socket.leave(channel)
    })
    socket.on('join channel', function(channel) {
      socket.join(channel.name)
    })
    socket.on('new message', function(msg) {
      console.log('foo');
      socket.broadcast.to(msg.channelID).emit('new bc message', msg);
    });
  });
}
