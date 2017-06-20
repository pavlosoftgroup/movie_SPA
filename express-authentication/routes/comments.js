var express = require('express');
var router = express.Router();
var db = require('../config/db').url;

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    var movieId = String(req.params.id);
    console.log(movieId);
    db.collection('comments').find({movieId: movieId}).toArray(function (err, docs) {
        // cb(err, docs);
    res.send(docs);
    })


    // res.send('respond with a resource');
});
router.post('/', function (req, res, next) {
    var comments = JSON.stringify(req.body.comment);

    db.collection('comments').insert(comments, function (err, result) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(result);

    res.send('respond with a resource');
    });
});

module.exports = router;