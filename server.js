const express = require("express");
const path = require('path');

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});