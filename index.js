// console.log("It's alive yrd");
const express = require('express');


const server = express();

server.use(express.json())

const port = 8000;

//request/route handler
server.get('/', (req, res) => {
    res.send('Hello World From Node.js')
})

server.post('/', (req, res) => {
    res.json(req.body);
})

server.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});