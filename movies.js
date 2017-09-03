let express = require('express');
let router = express.Router();

let movies = [
{title: 'star wars', genre: 'fantasy', id: '1'},
{title: 'fast n furious', genre: 'road trip', id: '2'}
]

router.get('/', (req, res) => {
	res.send(movies);
})

router.post('/', (req, res) => {
	movies.push(req.body);
	res.send(movies);
})

router.put('/', (req, res) => {
	for(let i = 0; i < movies.length; i++) {
		if(req.body.id === movies[i].id) {
			movies[i].title = req.body.title;
			movies[i].genre = req.body.genre;
			res.send(movies);
		} else {
		  continue;
		}
	}
})

router.delete('/:id', (req, res) => {
	for(let i = 0; i < movies.length; i++) {
		if(req.params['id'] === movies[i].id) {
			movies.splice(i, 1);
			res.send(movies);
		}
	}
})

module.exports = router;

// create pokemon API. add new pokemon, 
// retrieve them, delete them and update them
// 2 get requests, all pokemon, and by type
