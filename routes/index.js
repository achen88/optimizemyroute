var express = require('express');
var router = express.Router();

var gAPIkey = process.env.gAPIkey;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEMP' , googleAPI: "https://maps.googleapis.com/maps/api/js?key=" + gAPIkey + "&libraries=places&callback=initAutocomplete"});
});

module.exports = router;
