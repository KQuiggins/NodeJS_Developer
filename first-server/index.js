const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            friends: ['Alice', 'Bob'],
            
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});