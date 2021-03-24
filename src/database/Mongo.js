const mongoose = require("mongoose");

class MongoDB {
  static async connect(uri) {
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }
}

module.exports = MongoDB;
