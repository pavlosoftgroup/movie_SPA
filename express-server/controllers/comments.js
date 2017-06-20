var Comments = require('../models/comments');
var db = require('../db');

exports.return = function (req,res) {
    console.log(req.params);
    db.collection('comments').find({movieId: movieId}).toArray(function (err, docs) {
        cb(err, docs);
    });



    var movieId=String(req.params.id);
    console.log(movieId);
    // var movieId = JSON.parse(req.params.id);

    Comments.return(movieId, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.json(result);
    })
};
exports.create = function (req,res) {
    // var comments = req.body.comment;
    // var comments = JSON.parse(req.body.comment);
    var comments = JSON.stringify(req.body.comment);

    console.log(req.body);
    Comments.create(comments, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // console.log(result);
        res.send(result);
    })

};
