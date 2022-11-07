const express = require('express')
const app = express();

const cors = require('cors');

app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const PORT = 3001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http:\\localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => {
    console.log('server est en marche au', PORT);
})