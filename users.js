let express = require('express');
let router = express.Router();

let users = [
{name: 'john', id: '1'},
{name: 'jane', id: '2'}
]

router.get('/', (req, res) => {
	res.send(users);
})

module.exports = router;