/*jslint node:true */
'use strict';

var express = require('express');
var router = express.Router();

var localStorageService = require('../services/localStorageService');

router.post('/save', function (req, res, next) {
	localStorageService.setConfiguration(req.body);
	res.status = 200;
	res.send({message : "Success"});
});

module.exports = router;
