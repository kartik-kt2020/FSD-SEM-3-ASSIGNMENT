const http = require('http');

const PORT = 3000;

// 1. Create the HTTP server
const server = http.createServer((req, res) => {
  // 2. Set the HTTP status code to 200 (OK) and Content-Type header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 3. Send the response body and end the connection
  res.end('Welcome to NodeJS!');
});

// 4. Start listening on the specified port
server.listen(PORT, () => {
  console.log(`☕ Tea Stall HTTP Server is running at http://localhost:${PORT}/`);
});