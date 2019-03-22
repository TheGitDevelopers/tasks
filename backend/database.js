const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dbUser:dbUser@cluster0-naxhj.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

mongoose.connection
  .once("open", () => {
    console.log("Connection has been made");
  })
  .on("error", error => {
    console.log("Connnection error:", error);
  });

module.exports = mongoose;
