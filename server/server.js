const express = require('express');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`Welcome to Port ${PORT}!!`);
});

app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
});