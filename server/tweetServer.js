const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const socketIo = require('socket.io')
const cors = require('cors');
const http = require('http')
require('dotenv').config()

const app = express()
app.use(cors());
let port = process.env.ANOTHER_PORT

const server = http.createServer(app)
const io = socketIo(server, { cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: false
}})

app.use(bodyParser.json());

require('./routes/tweets.js')(app, io);

server.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
})