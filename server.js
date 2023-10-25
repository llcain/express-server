// require express

const express = require("express");

// import path module

const path = require('path');

const PORT = 8000;

// assign express method to a constant

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});

// export the app constant to make it available for use in other files
module.exports = app;