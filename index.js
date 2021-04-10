'use strict';

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    let currentRoom = '';
    console.log('a user connected', socket.id);

    socket.on('disconnect', () => {
        console.log('a user disconnected', socket.id);
        currentRoom = ''
    });

    socket.on('join room', room => {
        console.log('joining room: ', room);
        socket.join(room);
        currentRoom = room;
    });

    socket.on('chat message', ({ nickname, msg }) => {
        console.log('message: ', msg);
        io.to(currentRoom).emit('chat message', { nickname, message: msg });
    });
});

http.listen(3000, () => {
    console.log('listening on port 3000');
});
