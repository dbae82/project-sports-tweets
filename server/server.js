const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome to Port ${PORT}!!`);
});

app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
});