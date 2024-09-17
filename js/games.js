document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function() {
        const message = chatInput.value.trim();

        if (message !== "") {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            
            // Scroll to the bottom after new message
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Clear the input field
            chatInput.value = "";
        }
    });
});
