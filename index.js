const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

let data = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
	console.log('get');
	res.send(data);
});

app.get('/add', (req, res) => {
	console.log('add');
	data.push({ data: req.query });
	res.send(data);
});

app.get('/clear', (req, res) => {
	console.log('clear');
	data = [];
	res.send(data);
});

app.listen(port, '0.0.0.0', () => console.log(`Example app listening at http://localhost:${port}`))
