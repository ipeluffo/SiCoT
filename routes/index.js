var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Home' });
  res.redirect('publicStream');
});

router.get('/publicStream', function (req, res) {
	res.render('publicStream', { title: 'Public Stream API' });
});

router.get('/configuration', function (req, res) {
	res.render('configuration', { title: 'Configuration'});
});

module.exports = router;
