const express = require('express');
const router = require('../routes/routes');
const server = express();

server.use(express.json());

//Ponemos "_" porque no vamos a usar request en este metodo.
server.get('/', (_, response) => {
    response.send('Bienvenido a mi servidor :)');
});
server.use('/api', router)


module.exports = server