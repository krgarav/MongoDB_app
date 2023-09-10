const mongodb = require("mongodb");
const MongodbClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
    MongodbClient.connect("mongodb+srv://krgarav:9800664253@cluster0.tjvtu0m.mongodb.net/shop?retryWrites=true&w=majority")
        .then(result => {
            _db = result.db();
            callback(result)
            console.log("Connected")
        }).catch(err => {
            console.log(err)
            throw err;
        });
}
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No Database Found";
}
module.exports = {
    mongoConnect,
    getDb
}

