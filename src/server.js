const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    const pathToHtml = path.resolve(__dirname, '../dist/index.html');
    const contentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');

    res.send(contentFromHtml);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});