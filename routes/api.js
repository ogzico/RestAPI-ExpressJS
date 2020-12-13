var createError = require('http-errors');
var express = require('express');
var router = express.Router();


var apiKeys = ['foo', 'bar', 'baz'];

// these two objects will serve as our faux database

var repos = [
    { name: 'express', url: 'https://github.com/expressjs/express' },
    { name: 'stylus', url: 'https://github.com/learnboost/stylus' },
    { name: 'cluster', url: 'https://github.com/learnboost/cluster' }
];

var users = [
    { name: 'tobi' }
    , { name: 'loki' }
    , { name: 'jane' }
];

var userRepos = {
    tobi: [repos[0], repos[1]]
    , loki: [repos[1]]
    , jane: [repos[2]]
};

router.get('/',function(req,res,next) {
    var key = req.query['api-key'];

    if(!key) return next(createError(400, 'api key required'));

    if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));

    req.key = key;
    next();

    res.set('Content-Type', 'text/plain');

    // res.send(JSON.stringify(users))
    res.status(200).json({
        status:"api works",
        message: "success"
    })
})

module.exports = router;