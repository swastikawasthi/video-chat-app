const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));



io.on('connection', socket => {console.log(socket.id)
 socket.on('create_room',data=>{console.log(data)
    socket.join(data+'__'+socket.id);
    io.to(data+'__'+socket.id).emit('noti', data+'__'+socket.id)
 })
socket.on('join_room',data=>{socket.join(data);io.to(data).emit('noti', data)})

})

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
