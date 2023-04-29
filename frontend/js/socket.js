const socket = io()
const user = {
    username: prompt('Enter Username'),
    color: getRandomColor(),
}

socket.on('BROADCAST_MSG', ({ message, user }) => {
    const p = document.createElement('p')
    const chatContainer = document.querySelector('.chatContainer')
    chatContainer.appendChild(messageContainer(user, message))
    chatContainer.scrollTop = chatContainer.scrollHeight
})

const input = document.querySelector('input')
const button = document.querySelector('button')

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') sendMsgHandler(event)
})

button.onclick = sendMsgHandler
