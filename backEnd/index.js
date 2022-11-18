import express from 'express';
const app = express();
import userRoutes from './routes/userRoutes.js';
import { connect, isObjectIdOrHexString } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

import { Server } from 'socket.io';


config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes)

const DB_URL = process.env.DATABASE_URL;
import http from 'http';
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

// socket connexion
io.on('connection', (socket) => {
    console.log('un clien vient de se connecter');

    // socket.on('join-room', async (room) => {
    //     socket.join(room)
    // })
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

