var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OA六角學院歡迎您!' });
});

module.exports = router;
