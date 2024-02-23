const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 9002;


app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});


app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});