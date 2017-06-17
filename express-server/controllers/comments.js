var Comments = require('../models/comments');

exports.return = function (req,res) {
    var movieId=req.params.id;
    Comments.return(movieId, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.send(result);
    })
}
exports.create = function (req,res) {
    // var comments = req.body.comment;
    var comments = JSON.parse(req.body.comment);

    // console.log(comments);
    console.log(req.body);
    Comments.create(comments, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.send(result);
    })

}
