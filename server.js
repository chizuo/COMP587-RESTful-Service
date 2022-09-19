// Required dependencies for server.js
const express = require('express');
const v1 = require('./routes/v1/v1');

// Instanced Objects
const server = express();

server.use(express.json());
server.use('/v1', v1);

// Exporting for unit tests rather than running as a process and listening through the port.
module.exports = server;


if(require.main === module) {
   // Start server only if start via command land, ignores during unit testing.
   
    const port = process.env.PORT || 1587;
    server.listen((port), () => {
        console.log(`Service is listening at http://localhost:${port}`);
    });
}