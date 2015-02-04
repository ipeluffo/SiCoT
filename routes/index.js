/*jslint node:true */
'use strict';

var express = require('express');
var router = express.Router();

var localStorageService = require('../services/localStorageService');

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Home' });
  res.redirect('publicStream');
});

router.get('/publicStream', function (req, res) {
	res.render('publicStream', { title: 'Public Stream API' });
});

router.get('/configuration', function (req, res) {
	var conf = localStorageService.getConfiguration() || {};
	conf.title = 'Configuration';
	res.render('configuration', conf);
});

module.exports = router;
