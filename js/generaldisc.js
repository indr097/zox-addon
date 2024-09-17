// Function to send a chat message
function sendMessage() {
    let message = document.querySelector('.chat-input').value;
    if (message) {
        let chatBox = document.querySelector('.chat-box');
        let newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.innerHTML = `<strong>You:</strong> ${message}`;
        chatBox.appendChild(newMessage);
        document.querySelector('.chat-input').value = ''; // Clear input
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
    }
}

// Event listener for the Send button
document.querySelector('.btn-send').addEventListener('click', function() {
    sendMessage();
});

// Event listener for the Enter key
document.querySelector('.chat-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault(); // Prevent default action (new line in input)
    }
});
