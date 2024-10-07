import './index.css';

const USER_NAME = "Вы";

const getMessages = () => JSON.parse(localStorage.getItem('messages')) || [];

const createMessages = () => {
    const messagesList = document.getElementById('messages');
    const doneCheck = `<span class="material-symbols-outlined">done_all</span>`;

    messagesList.innerHTML = '';
    const messages = getMessages();

    messages.forEach(msg => {
        const msClass = msg.name === USER_NAME ? 'user' : 'other';
        const doneIcon = msg.name === USER_NAME ? doneCheck : '';

        messagesList.innerHTML += `
            <li class="message ${msClass}">
                <p>${msg.text}</p>
                <span class="time">${msg.time} ${doneIcon}</span>
            </li>
        `;
    });

    messagesList.scrollTop = messagesList.scrollHeight;
}

const saveMessage = (text) => {
    const messages = getMessages();
    const newMessage = {
        name: USER_NAME,
        text: text,
        time: new Date().toLocaleTimeString(["ru-RU"], { hour: '2-digit', minute: '2-digit' })
    };
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
}

const sendMessage = () => {
    const messageInput = document.getElementById('message-input');
    if (!messageInput.value) return;
    saveMessage(messageInput.value);
    createMessages();
    messageInput.value = '';
};

document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    createMessages();
});
