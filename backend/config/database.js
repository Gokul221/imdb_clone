const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(console.log(`DB CONNECTED SUCCESSFULLY`))
    .catch((error) => {
      console.log(`DB CONNECTION FAILED`);
      console.log(error);
      process.exit(1);
    });
};
