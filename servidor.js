const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('Usuario conectado');

  socket.on('draw', data => {
    io.emit('draw', data); // Enviar datos de dibujo a todos los clientes conectados
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor activo en puerto 3000');
});
