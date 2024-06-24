const path = require('path');

const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.static(path.join(__dirname, 'public')))

app.set('port', 3000);

app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});



// // specifying the desired port
// const port = 4000;
// const server = http.createServer((req, res) => {
//     // adding port information to the response
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`Hello, GeeksforGeeks! Server is running on port ${port}`);
// });
// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });