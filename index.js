var express = require('express');
var app = express();

app.get('/', (req, res) => res.render('index', {
    name: 'Minh'
}))

app.get('/users', (req, res) => res.render('users/index', {
    users: [
        {id: 1, name: 'Minh'},
        {id: 2, name: 'Nghia'}
    ]
}))

app.set('view engine', 'pug');
app.set('views', './views');

var port = 8080;

app.listen(port, () => console.log('Server is running at: http://localhost:' + port))