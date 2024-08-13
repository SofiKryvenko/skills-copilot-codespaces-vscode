// // Create web server
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const comments = require('./comments');

// const server = http.createServer((req, res) => {
//   if (req.url === '/comments' && req.method === 'GET') {
//     res.writeHead(200, {
//       'Content-Type': 'application/json',
//     });
//     res.end(JSON.stringify(comments));
//   }
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });