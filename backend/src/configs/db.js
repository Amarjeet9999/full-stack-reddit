const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://hardik:Secret_123@redditdb.ay5oi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
//new