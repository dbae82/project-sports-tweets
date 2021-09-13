const http = require('http')
const path = require('path')
const express = require('express')
const socketIo = require('socket.io')
const needle = require('needle')
require('dotenv').config()
const cors = require('cors');
const TOKEN = process.env.TWITTER_BEARER_TOKEN
const PORT = process.env.TWITTER_PORT

const app = express()
app.use(cors());

const server = http.createServer(app)
const io = socketIo(server, { cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: false
}})


const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url'

const rules = [{ value: 'nfl lang:en' }]

async function getRules() {
    const response = await needle('get', rulesURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })

    return response.body
}

async function setRules() {
    const data = {
        add: rules
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        }
    })

    return response.body
}

async function deleteRules(rules) {
    if (!Array.isArray(rules.data)) {
        return null
    }

    const ids = rules.data.map((rule) => rule.id)

    const data = {
        delete: {
            ids: ids
        }
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        }
    })

    return response.body
}

function streamTweets(socket) {
    const stream = needle.get(streamURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })

    stream.on('data', (data) => {
        try {
            const json = JSON.parse(data)
            // console.log(json);
            socket.emit('tweet', json)
        } catch (error) { }
    })
}

io.on('connection', async () => {
    console.log('Client connected...');
    let currentRules
    try {
        currentRules = await getRules()
        await deleteRules(currentRules)
        await setRules()
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
    streamTweets(io)
    io.on('disconnect', () => {
        io.disconnectSockets();
        console.log('Client disconnected')
    })
})

// const startStream = async () => {
//     let currentRules
//     try {
//         currentRules = await getRules()
//         await deleteRules(currentRules)
//         await setRules()
//     } catch (error) {
//         console.error(error);
//         // process.exit(1)
//     }
//     streamTweets()
// }

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))