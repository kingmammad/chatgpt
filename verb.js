
function addChatbotResponse(responseText) {
    const chatOutput = document.getElementById('chat-output');
    const botResponse = document.createElement('div');
    botResponse.classList.add('message', 'bot-message');
    botResponse.textContent = responseText;
    chatOutput.appendChild(botResponse);
}

// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    
    // Assuming you have a way to get responses from ChatGPT
    const chatGPTResponse = addChatbotResponse(userInput); // Replace with your actual code to retrieve ChatGPT responses

    
   
    
    // Clear the input field
    document.getElementById('user-input').value = '';
}

// Listen for user input and trigger response
document.getElementById('send-button').addEventListener('click', handleUserInput);
