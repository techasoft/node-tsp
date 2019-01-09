var express = require('express');
var router = express.Router();

const path = require('path');
const jwt = require('jsonwebtoken');

var user = {
  id: 1,
  name: 'test',
  password: '1234'
};

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/signin.html'));
});

router.post('/', function (req, res, next) {
  console.log(req.body.email);
  console.log(req.body.password);
  var token = jwt.sign(user, 'secret', {
    expiresIn: 10080 // in seconds
  });
  res.json({
    success: true,
    // success: false,
    token: token,
    // token: 'JWT ' + token
    redirect: '/'
  });
});

module.exports = router;
