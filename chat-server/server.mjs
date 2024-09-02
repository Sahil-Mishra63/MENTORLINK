import express from 'express';
import http from 'http';
// import { message } from 'prompt';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "*"
    }
});

const users = {};

io.on('connection', (socket) =>{
    socket.on('new-user-joined', (name) => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', (message) => {
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]});
    });

    socket.on('disconnect', () =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });

});

app.get('/api/some-features', (req, res) =>{
    res.send('some features response');
});

const port = 3000;

server.listen(port, () =>{
    console.log(`server listening on http://localhost:${port}`);
});