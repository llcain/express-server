const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send('Hey Codedreamer!');
});

app.listen(8000, () => {
    console.log("Listen on the port 8000...");
});