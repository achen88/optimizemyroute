var express = require('express');
var router = express.Router();

var gAPIkey = process.env.gAPIkey;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Optimize My Route' , gAPIkey: gAPIkey});
});

module.exports = router;
