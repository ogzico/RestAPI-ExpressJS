var createError = require('http-errors');
var express = require('express');
var router = express.Router();

//db setup

const db = require('../db');
const dbName = "sample_airbnb"
const collectionName = "listingsAndReviews"



router.get('/', function (req, res, next) {
    var key = parseInt(req.query['beds']);

    if (!key) return next(createError(400, 'api key required'));

    db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
        // get all items
        dbCollection.findOne({ beds: key }, (error, result) => {
            if (error) throw error;
            // return item
            res.json(result);
        });

        // << db CRUD routes >>

    }, function (err) { // failureCallback
        throw (err);
    });
})

module.exports = router;