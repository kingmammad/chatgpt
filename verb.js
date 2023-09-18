const { default: axios } = require("axios");

function addChatbotResponse(responseText) {
    document.getElementById('user-input').value = '';
    const chatOutput = document.getElementById('chat-output');
    const botResponse = document.createElement('div');
    
    botResponse.textContent = responseText;
    chatOutput.appendChild(botResponse);
    
}
const axios=require('axios');
const apikey=''


// Listen for user input and trigger response
document.getElementById('send-button').addEventListener('click', addChatbotResponse);
