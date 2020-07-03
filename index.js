var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('HELLO MINH!'))

var port = 8080;

app.listen(port, () => console.log('Server is running at: http://localhost:' + port))