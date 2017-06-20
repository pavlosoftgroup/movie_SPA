var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

exports.all = function(movieId ,cb) {

    db.get().collection('vote').find({movieId : movieId}, function (err, doc) {
        cb(err, doc);
        console.log(doc);
    })
};

exports.post = function (vote, cb) {
    db.get().collection('vote').insert(vote, function (err, result) {
        cb(err, result);

        // res.send(result);
    })

}
