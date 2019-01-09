var express = require('express');
var router = express.Router();
var moment = require('moment');

router.get('/', function (req, res, next) {
  if (!req.session.myData) {
    console.log('empty');
    req.session.myData = 'SESSION-DATA';
  } else {
    console.log(req.session.myData);
  }
  // req.session.save();
  res.send('Hello, world!');
  console.log('[LOG] ' + moment().format() + ' %s', req.originalUrl);
  console.log('req session id : ' + JSON.stringify(req.session.id));
  console.log('req session    : ' + JSON.stringify(req.session));
  console.log('req user', req.user);
  console.log('Authorization', req.get('Authorization'));
  // console.log('request', req);
  // console.log();
  next();
});
router.get('/:name', function (req, res, next) {
  res.send('Hello, ' + req.params.name + '!');
  next();
});

module.exports = router;
