var db = require('../db');


exports.return = function (movieId, cb) {

    db.get().collection('comments').find({movieId: movieId}).toArray(function (err, docs) {
        cb(err, docs);
    })
}
exports.create = function (comments, cb) {
    db.get().collection('comments').insertOne(comments, function (err, result) {
      cb(err, result);
    })
}

