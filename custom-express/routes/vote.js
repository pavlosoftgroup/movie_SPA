var express = require('express');
var router = express.Router();
var voteController = require('../controllers/vote');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var db = req.db;
    voteController.all()

    var collection = db.get('votecollection');
    collection.find({},{},function(e,docs){
        // res.render('userlist', {
        //     "userlist" : docs
        // });
        console,log(docs);
        res.send(docs)
    });
    res.send('respond with a resource');
});
router.post('/', voteController.post);


module.exports = router;
