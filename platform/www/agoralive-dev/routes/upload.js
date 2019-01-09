var express = require('express');
var router = express.Router();

const path = require('path');
const multer = require('multer');
var moment = require('moment');

// upload storage configuration
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'platform/sites/agoralive-dev/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYY-MM-DD-hh-mm-ss-') + file.originalname);
  }
});
var upload = multer({
  storage: storage
});

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/form.html'));
  // res.send("/profile");
  // next();
});
router.post('/', upload.array('uploadFiles', 5), function (req, res, next) {
  console.log(req.files);
  res.json(req.files);
});

module.exports = router;
