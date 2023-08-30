// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Hello, <span style="color: darkblue;">human</span></h1>');
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`El servidor está escuchando en el puerto ${port}`);
// })

// const fs = require('fs');

// const filePath1 = './nuevoDirectorio/index.html';
// const filepath2 =  './index.html';

// const content = 'Hello, human, I am on control now';

// const directoryName = 'nuevoDirectorio';

// fs.mkdir(directoryName, (error) => {
//     if (error) {
//         console.error('Error al crear el directorio:', error);
//         return;
//     };
//     console.log('Directorio creado exitosamente.');
// })

// fs.writeFile(filePath1, content, 'utf8', (error) => {
//     if (error) {
//         console.error('Error al sobreescribr el archivo:', error);
//         return;
//     }
//     console.log('Archivo escrito exitosamente.');
// });

// fs.readFile(filePath1, 'utf8', (error, data) => {
//     if (error) {
//         console.error('Error al leer el archivo:', error);
//         return;
//     } 
//     console.log('Contenido del archivo:', data)
// }); 

// fs.unlink(filepath2, (error)=> {
//     if (error) {
//         console.error('Error al eliminar el archivo:', error);
//         return;
//     }
//     console.log('Archivo eliminado exitosamente');
// });

// const path = require('path');

// const fullPath = path.join('/users', 'johnSalchichon', 'documents', 'file.txt');
// console.log('Ruta completa:', fullPath);

// const filename = path.basename(fullPath);
// console.log('Nombre de archivo:', filename);

// const extension = path.extname(fullPath);
// console.log('Extension:', extension);

// const normalizePath = path.normalize('/users/../john/documents/../file.txt');
// console.log('Ruta normalizada:', normalizePath);

// const os = require('os');

// console.log('Plataforma del sistema operativo:', os.platform());
// console.log('Arquitectura de la CPU:', os.arch());
// console.log('Información sobre las CPUs:', os.cpus());
// console.log('Memoria total:', os.totalmem() / (1024 * 1024) + ' MB');
// console.log('Memoria libre:', os.freemem() / (1024 * 1024) + ' MB');
// console.log('Nombre del host:', os.hostname());
// console.log('Interfaces de red:', os.networkInterfaces());

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('saludo', () => {
//     console.log('Hola, evento "saludo" fue activado');
// });

// myEmitter.emit('saludo');

// const util = require('util');

// const fs = require('fs');
// const readFilePromise = util.promisify(fs.readFile);

// readFilePromise('./nuevoDirectorio/index.html', 'utf8')
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.error(error);
// });


// const url = require('url');

// const urlString = 'https://www.youtube.com/watch?v=51FH458c_lI&list=PLCmwTbs_QbFB6kDHWbCCLs6TccJ2WPWWd&index=14';
// const parsedUrl = url.parse(urlString, true);

// console.log(`Protocol: ${parsedUrl.protocol}`);
// console.log(`Host: ${parsedUrl.host}`);
// console.log(`Path: ${parsedUrl.pathname}`);
// console.log(parsedUrl.query);

// const queryParams = new url.URLSearchParams(parsedUrl.query);
// queryParams.append('newParam', 'newValue');

// console.log(queryParams.toString());


const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlString = req.url;

    const parsedUrl = url.parse(urlString, true);
    const queryParameters = parsedUrl.query;

    const name = queryParameters.name || 'Invitado';
    const place = queryParameters.place || 'Some place';

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello ${name} from ${place}`);
});

const port = 3000;
server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
