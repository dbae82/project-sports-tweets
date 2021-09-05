const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/api/vi/user', routes.user);

app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
});