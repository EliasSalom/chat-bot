const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
// const http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log("Server is listening on localhost::" + PORT);
});





