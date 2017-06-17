var Votes = require('../models/vote');

exports.all = function (req, res) {
    var movieId = req.params.id;
    Votes.all(movieId, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.send(result);
    });
};

exports.post = function (req, res) {
    var vote = req.body;
    Votes.post(vote, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.send(result);

    })


}