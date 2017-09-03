let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let movies = require('./movies');
let users = require('./users');

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.end();
})

app.use('/api/movie', movies);
app.use('/api/user', users);


app.listen(3000, () => {
	console.log('HOW DO YOU OWN DISORDERRRRR?!?! DISORDERRR!');
})

module.exports = router;