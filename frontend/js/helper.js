const getRandomColor = () => {
    const colors = ['maroon', 'darkslateblue', 'purple', 'orange', 'black']
    return colors[Math.floor(Math.random() * colors.length)]
}

const sendMsgHandler = (event) => {
    event.preventDefault()
    if (!input.value) return
    socket.emit('SEND_MSG', { message: input.value, user })
    input.value = ''
}

const messageContainer = (user, message) => {
    const userElement = document.createElement('span')
    const messageElement = document.createElement('p')
    userElement.innerText = user.username
    userElement.style.color = user.color
    messageElement.innerText = message
    const messageContainerElement = document.createElement('div')
    messageContainerElement.appendChild(userElement)
    messageContainerElement.appendChild(messageElement)
    messageContainerElement.classList.add('messageContainer')

    return messageContainerElement
}