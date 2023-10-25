require('dotenv').config()

// require express

const express = require("express");

// import path module

const path = require('path');



// assign express method to a constant

const app = express();

// middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});

// export the app constant to make it available for use in other files
module.exports = app;