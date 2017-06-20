var express = require('express');
var router = express.Router();
var votesController = require('../controllers/vote');


/* GET users listing. */
router.get('/:id', votesController.all);



// exports.get('/vote/', routeVoteContriller());

router.post('/', votesController.post);

module.exports = router;
