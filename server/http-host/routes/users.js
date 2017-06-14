var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/all', function(req, res, next) {
  res.send('respond with a User');
});

module.exports = router;
