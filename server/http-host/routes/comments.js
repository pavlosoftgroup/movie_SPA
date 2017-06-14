var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET users listing. */
router.get('/', function (req, res, next) {
    const comment = {
        movieId: req.body.body,
        autor: req.body.title,
        text: req.body.text,
        date: req.body.date
    };

    var db = req.db;
    // var collection = db.post().collection('comments');
    db.get('comments').insert(comment, function (err, result) {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    res.send(result.ops[0]);
                }
            });

    // var collection = db.post().collection('comments');
    // db.collection('comments').insert(comment, function (err, result) {
    //     if (err) {
    //         res.send({'error': 'An error has occurred'});
    //     } else {
    //         res.send(result.ops[0]);
    //     }
    // });


    // res.send('respond with a Comments');
});

// module.exports = router;
router.post('/', function (reg, res) {
    const comment = {
        movieId: reg.body.body,
        autor: reg.body.title,
        text: reg.body.text,
        date: reg.body.date
    };
    var collection = db.post().collection('comments');
    collection('comments').insert(comment, function (err, result) {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(result.ops[0]);
        }
    });


});


router.get('/all', function (req, res) {
    var collection = db.get().collection('comments');

    collection.find().toArray(function (err, docs) {
        res.render('comments', {comments: docs})
    })
});

router.get('/recent', function (req, res) {
    var collection = db.get().collection('comments');

    collection.find().sort({'date': -1}).limit(100).toArray(function (err, docs) {
        res.render('comments', {comments: docs})
    })
});

module.exports = router;