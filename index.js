'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.NODE_ENV === 'production' ? 80 : 3000;

app.use(express.static('./build/static/'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.get('/:path', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/404.html'));
});

app.listen(PORT, console.log.bind(console, `Server running on port ${PORT}`));