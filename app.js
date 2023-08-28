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

const path = require('path');

const fullPath = path.join('/users', 'johnSalchichon', 'documents', 'file.txt');
console.log('Ruta completa:', fullPath);

const filename = path.basename(fullPath);
console.log('Nombre de archivo:', filename);

const normalizePath = path.normalize('/users/../john/documents/../file.txt');
console.log('Ruta normalizada:', normalizePath);