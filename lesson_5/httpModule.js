// In NodeJS application we create server inside the application
// Http module is used to create a server
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Server has started');
    res.end();
});

// Port Number
const PORT = 3000;

// Listen to the port
server.listen(PORT);

console.log(`Listening to port ${PORT}`);
