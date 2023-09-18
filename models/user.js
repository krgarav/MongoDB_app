const mongodb = require("mongodb");
const { getDb } = require("../util/database");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this)
  }

  static findById(UserId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: new mongodb.ObjectId(UserId) })
    // .next()
    // .then(user => {
    //   return user;
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }
}

module.exports = User;
