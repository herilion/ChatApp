import express from 'express';
const app = express();
import userRoutes from './routes/userRoutes.js';
import { connect, isObjectIdOrHexString } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import User from './models/Users.js'
import Message from './models/Message.js';
const rooms = ['Room 1', 'Room 2', 'Room3', 'Room4'];

import { Server } from 'socket.io';


config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes)

const DB_URL = process.env.DATABASE_URL;
import http, { get } from 'http';
const server = http.createServer(app);

const PORT = process.env.PORT;
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})
app.get('/rooms', (req, res) => {
    res.json(rooms)
})

//get last message from room
const getLastMessagesFromRoom = async (room) => {
    let roomMessages = await Message.aggregate([
        { $match: { to: room } },
        { $group: { _id: '$date', messagesByDate: { $push: '$$ROOT' } } }
    ])
    return roomMessages;
}

// sort room message by date
const sortRoomMessagesByDate = async (messages) => {
    return messages.sort(function (x, y) {
        let date1 = x._id.split('/');
        let date2 = y._id.split('/');

        date1 = date1[2] + date1[0] + date1[1]
        date2 = date2[2] + date2[0] + date2[1];

        return date1 < date2 ? -1 : 1
    })
}

// socket connexion

io.on('connection', (socket) => {
    console.log('un clien vient de se connecter');

    // contact new user
    socket.on('new-user', async () => {
        const members = await User.find();
        io.emit('new-user', members)
    })

    //joint room
    socket.on('join-room', async (room) => {
        socket.join(room);
        let roomMessages = await getLastMessagesFromRoom(room);
        roomMessages = sortRoomMessagesByDate(roomMessages);
        socket.emit('room-messages', roomMessages)
    })

    socket.on('message-room', async (room, content, sender, time, date) => {
        const newMessage = await Message.create({ content, from: sender, time, date, to: room });
        let roomMessages = await getLastMessagesFromRoom(room);
        roomMessages = sortRoomMessagesByDate(roomMessages);
        //sending message to room
        io.to(room).emit('room-messages', roomMessages);
        //add notification
        socket.broadcast.emit('notifications', room)
    })
})

console.log(DB_URL)
//connection à la base des données
connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log('server est en marche au', PORT);
        })
    })
    .catch(err => {
        console.log(err.message);
    })

