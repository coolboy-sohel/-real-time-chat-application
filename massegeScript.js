<script src="/socket.io/socket.io.js"></script>
<script>
  // Connect to the Socket.io server
  const socket = io();
  
  // Listen for chat message events
  socket.on('chat message', (msg) => {
    // Add the message to the chat window
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML += `<p>${msg}</p>`;
  });
  
  // Send a chat message
  const form = document.getElementById('chat-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value;
    socket.emit('chat message', msg);
    input.value = '';
  };
</script>
