// Import the necessary modules
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// Initialize the Express app
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.io by attaching it to the HTTP server
const io = socketio(server);

// Listen for socket connection events
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Listen for chat message events
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    
    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Listen for disconnection events
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
