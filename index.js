const http =require('http');
const fs = require('fs/promises')
const server = http.createServer(async (request, response) => {
    if(request.url === '/sobreescribir'){
        await fs.writeFile('./folder/ejemplo.txt', 'archivo sobreescrito.')
        response.write(`Yo que vos, me voy a revisar el archivo :O`)
        response.end();
    }
    if(request.url === '/agregar'){
        await fs.appendFile('./folder/ejemplo.txt', 'Agregando contenido al archivo ');
        response.write('Agregado contendio');
        response.end();
    }
    if(request.url === '/eliminar'){
        try {
            await fs.unlink('./folder/ejemplo.txt');
            response.write('Ya no queda nada...');
            response.end();
        } catch (error) {
            response.write('A donde me mandaste flaco?????');
            response.end();
        }
    }
})

server.listen(8080);

console.log('Servidor escuchando en puerto 8080');