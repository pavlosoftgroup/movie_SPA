var db = require('../db');

exports.create = function(user, cb) {
    db.get().collection('user').insert(user, function(err, result) {
        cb(err, result);
    });
};
exports.checkin = function (session,cb) {


    // db.get().collection('user').find({})
}
