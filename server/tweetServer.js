const express = require('express')
const bodyParser = require('body-parser')
const util = require('util')
const request = require('request')
const path = require('path')
const socketIo = require('socket.io')
const cors = require('cors');
const http = require('http')
require('dotenv').config()

const app = express()
app.use(cors());
let port = process.env.ANOTHER_PORT
const post = util.promisify(request.post)
const get = util.promisify(request.get)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const server = http.createServer(app)
const io = socketIo(server, { cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: false
}})

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN

let timeout = 0

const streamURL = new URL("https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url")

const rulesURL = new URL("https://api.twitter.com/2/tweets/search/stream/rules")

const errorMessage = {
    title: "Please Wait",
    detail: "Waiting on new Tweets to be posted...",
}

const authMessage = {
    title: "Could not authenticate",
    details: [
        `Please make sure your bearer token is correct`,
    ],
    type: "https://developer.twitter.com/en/docs/authentication",
}

const sleep = async (delay) => {
    return new Promise((resolve) => setTimeout(() => resolve(true), delay))
}

app.get('/api/rules', async (req, res) => {
    if (!BEARER_TOKEN) {
        res.status(400).send(authMessage)
    }

    const token = BEARER_TOKEN
    const requestConfig = {
        url: rulesURL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        json: true,
    }

    try {
        const response = await get(requestConfig)

        if (response.statusCode !== 200) {
            if(response.statusCode === 403) {
                res.status(403).send(response.body)
            } else {
                throw new Error(response.body.error.message)
            }
        }

        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

app.post('/api/rules', async (req, res) => {
    if (!BEARER_TOKEN) {
        res.status(400).send(authMessage)
    }

    const token = BEARER_TOKEN
    const requestConfig = {
        url: rulesURL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        json: req.body,
    }

    try {
        const response = await post(requestConfig)

        if (response.statusCode === 200 || response.statusCode === 201) {
            res.send(response)
        } else {
            throw new Error(response)
        }
    } catch (error) {
        res.send(error)
    }
})

const streamTweets = (socket, token) => {
    let stream

    const config = {
        url: streamURL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        timeout: 31000,
    }

    try {
        const stream = request.get(config);

        stream
            .on('data', (data) => {
                try {
                    const json = JSON.parse(data)
                    if (json.connection_issue) {
                        socket.emit('error', json)
                        reconnect(stream, socket, token)
                    } else {
                        if (json.data) {
                            socket.emit('tweet', json)
                        } else {
                            socket.emit('authError', json)
                        }
                    }
                } catch (error) {
                    socket.emit('heartbeat')
                }
            })
            .on('error', (error) => {
                socket.emit('error', errorMessage)
                reconnect(stream, socket, token)
            })
    } catch (error) {
        socket.emit('authError', authMessage)
    }
}

const reconnect = async (stream, socket, token) => {
    timeout++
    stream.abort()
    await sleep(2 ** timeout * 1000)
    streamTweets(socket, token)
}

io.on('connection', async (socket) => {
    try {
        const token = BEARER_TOKEN
        io.emit('connect', 'Client connected')
        const stream = streamTweets(io, token)
    } catch (error) {
        io.emit('authError', authMessage)
    }
})

server.listen(port, () => console.log(`Listening on port ${port}`))