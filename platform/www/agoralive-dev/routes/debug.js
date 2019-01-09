var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req);
    console.log('/*************************************************/');
    res.send();
    console.log(res);
    // res.write(req);
    // res.write(res);
    return next();
});

module.exports = router;