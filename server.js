const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const Server = express();
 const http = require('http').createServer(Server);

Server.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io')(http)
io.on('connection', socket =>{
    console.log('connected ready');

    socket.on('sendMessage',msg =>{
        console.log(msg);
    })
})

Server.listen(PORT, () => {
    console.log("Server is listening on localhost::" + PORT);
});





