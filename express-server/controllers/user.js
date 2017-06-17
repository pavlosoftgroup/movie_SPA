var Users = require('../models/user');

exports.create = function(req, res) {
    var user = {
        name:req.body.user.name,
        email:req.body.user.email,
        password:req.body.user.password,
        status: 1,
    };
    console.log(user);
    Users.create(user, function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);

        res.send(result);
    });
};
