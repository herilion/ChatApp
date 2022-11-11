const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const DB_URL = process.env.DATABASE_URL;

// const server = require('http').createServer(app);
const PORT = process.env.PORT;
// const io = require('socket.io')(server, {
//     cors: {
//         origin: 'http:\\localhost:3000',
//         methods: ['GET', 'POST']
//     }
// })
console.log(DB_URL)
//connection à la base des données
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('server est en marche au', PORT);
        })
    })
    .catch(err => {
        console.log(err.message);
    })

