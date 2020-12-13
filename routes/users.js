var express = require('express');
var router = express.Router();

let users = {
  "1": {
    "id": '1',
    "username": 'Robin Wieruch',
  },
  "2": {
    "id": '2',
    "username": 'Dave Davids',
  },
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(users));
});

module.exports = router;
