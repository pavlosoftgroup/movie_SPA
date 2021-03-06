const Mongoose = require('mongoose');
const config = require('./models/user');

Mongoose.connect(config.db);

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

module.exports = {
    'url' : 'mongodb://localhost/passport'
}
exports.db = db;