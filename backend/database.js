const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${
    process.env.DB_HOST
  }/${process.env.DB_NAME}?retryWrites=true`,
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
