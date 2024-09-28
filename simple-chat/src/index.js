import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const username = "Вы";
    const doneCheck = `<span class="material-symbols-outlined">done_all</span>`;

    function displayMessages() {
        messagesDiv.innerHTML = '';
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.forEach(msg => {
            const messageElement = document.createElement('div');
            const messageElementText = document.createElement('p');
            const messageElementTime = document.createElement('span');
            messageElement.classList.add('message');
            messageElementTime.classList.add('time');
            messageElement.classList.add(msg.name === username ? 'user' : 'other');
            messageElementText.textContent = `${msg.text}`;
            messageElementTime.textContent = `${msg.time}`;
            if (msg.name === username) {
                messageElementTime.innerHTML += ` ${doneCheck}`;
            }
            messageElement.appendChild(messageElementText)
            messageElement.appendChild(messageElementTime)
            messagesDiv.appendChild(messageElement);
        });

        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function saveMessage(text) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const newMessage = {
            name: username,
            text: text,
            time: new Date().toLocaleTimeString(["ru-RU"], { hour: '2-digit', minute: '2-digit' })
        };
        messages.push(newMessage);
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    sendButton.addEventListener('click', () => {
        if (messageInput.value) {
            saveMessage(messageInput.value);
            displayMessages();
            messageInput.value = '';
            sendButton.style.display = 'none'
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value) {
            sendButton.style.display = 'block';
        } else {
            sendButton.style.display = 'none';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && messageInput.value) {
            saveMessage(messageInput.value);
            displayMessages();
            messageInput.value = '';
            e.preventDefault();
        }
    });

    displayMessages();
});
