const express = require("express");

const PORT = 8000;

const app = express();

app.get("/", (request, response) => {
    response.send('Hey Bobby!');
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});