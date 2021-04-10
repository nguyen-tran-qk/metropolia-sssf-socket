'use strict';

const socket = io();

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const nicknameInput = document.getElementById('nickname');
    const inp = document.getElementById('m');
    socket.emit('chat message', { nickname: nicknameInput.value, msg: inp.value });
    inp.value = '';
});

const joinRoom = (room) => {
    socket.emit('join room', room);
    document.getElementById('selects').setAttribute('hidden', true);
    document.getElementById('room').innerHTML = `You are in room ${room}`;
}

socket.on('chat message', ({ nickname, message }) => {
    const item = document.createElement('li');
    item.innerHTML = `<b>From ${nickname}</b>: ${message}`;
    document.getElementById('messages').appendChild(item);
});
