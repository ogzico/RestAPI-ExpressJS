const { MongoClient } = require('mongodb')

const dbConnectionUri = process.env.CONNECTION_URI

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failuerCallback
) {
    MongoClient.connect(dbConnectionUri, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`)
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection)
        }
    })
}

module.exports = {
    initialize
}