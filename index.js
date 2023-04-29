import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import path from 'path'

const app = express()
const server = createServer(app)
const io = new Server(server)

//making the frontend folder static
app.use(express.static(path.join(path.resolve(), 'frontend')))

//serving the index.html file
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

io.on('connection', (socket) => {
    socket.on('SEND_MSG', ({message, user}) => {
        io.emit('BROADCAST_MSG', {message, user})
    })
})

server.listen(5000, () => {
    console.log('listening to port 5000...')
})
