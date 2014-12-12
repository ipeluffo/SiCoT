var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/publicStream', function (req, res) {
	res.render('publicStream', { title: 'Public Stream API' });
});

module.exports = router;
