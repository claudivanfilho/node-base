var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');
//var Book = require('../models/book.model.js');
//var Populate = require('../models/populate.js');

router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/home', function(req, res, next) {
  return res.sendFile(path.join(__dirname+'/../public/index.html'));
});

router.get('/backdoor', function(req, res, next) {
  return res.send("Database Reseted");
});

module.exports = router;